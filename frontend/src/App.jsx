import { useState, useEffect } from 'react'
import { listarJogos, criarJogo, excluirJogo } from './api'
import Header from './components/Header'
import FormJogo from './components/FormJogo'
import ListaJogos from './components/ListaJogos'
import ModalExcluir from './components/ModalExcluir'

export default function App() {
  // Lista de jogos que veio da API
  const [jogos, setJogos] = useState([])

  // Texto digitado na busca
  const [busca, setBusca] = useState('')

  // Controla as mensagens de "Carregando..." e de erro
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  // Guarda o jogo que o usuário quer excluir (para mostrar o modal)
  const [jogoParaExcluir, setJogoParaExcluir] = useState(null)

  // Toda vez que "busca" mudar, busca os jogos de novo na API
  useEffect(() => {
    buscarJogos()
  }, [busca])

  function buscarJogos() {
    setCarregando(true)
    listarJogos(busca)
      .then(function (dados) {
        setJogos(dados)
        setErro('')
      })
      .catch(function () {
        setErro('Não foi possível carregar os jogos. O servidor Django está rodando?')
      })
      .finally(function () {
        setCarregando(false)
      })
  }

  function handleCadastrar(novoJogo) {
    criarJogo(novoJogo)
      .then(function (jogoCriado) {
        // Coloca o jogo novo no topo da lista, sem precisar recarregar a página
        setJogos([jogoCriado, ...jogos])
        setErro('')
      })
      .catch(function () {
        setErro('Não foi possível cadastrar o jogo.')
      })
  }

  function handleConfirmarExclusao() {
    const idParaExcluir = jogoParaExcluir.id

    excluirJogo(idParaExcluir)
      .then(function () {
        const jogosSemOExcluido = jogos.filter(function (jogo) {
          return jogo.id !== idParaExcluir
        })
        setJogos(jogosSemOExcluido)
        setErro('')
      })
      .catch(function () {
        setErro('Não foi possível excluir o jogo.')
      })
      .finally(function () {
        setJogoParaExcluir(null)
      })
  }

  return (
    <div className="app">
      <Header busca={busca} onBuscar={setBusca} />

      <main className="conteudo">
        <p className="total">
          <strong>{jogos.length}</strong> {jogos.length === 1 ? 'jogo cadastrado' : 'jogos cadastrados'}
        </p>

        <div className="layout">
          <FormJogo onCadastrar={handleCadastrar} />

          <section className="painel-lista">
            <h2>Sua biblioteca</h2>

            {erro && <p className="mensagem erro">{erro}</p>}

            {carregando ? (
              <p className="mensagem">Carregando...</p>
            ) : (
              <ListaJogos jogos={jogos} onPedirExclusao={setJogoParaExcluir} />
            )}
          </section>
        </div>
      </main>

      {jogoParaExcluir && (
        <ModalExcluir
          jogo={jogoParaExcluir}
          onCancelar={() => setJogoParaExcluir(null)}
          onConfirmar={handleConfirmarExclusao}
        />
      )}
    </div>
  )
}
