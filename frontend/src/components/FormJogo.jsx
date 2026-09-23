import { useState } from 'react'

// Formulário para cadastrar um jogo novo
export default function FormJogo({ onCadastrar }) {
  const [nome, setNome] = useState('')
  const [genero, setGenero] = useState('')
  const [ano, setAno] = useState('')
  const [finalizado, setFinalizado] = useState(false)
  const [erroValidacao, setErroValidacao] = useState('')

  function handleSubmit(evento) {
    evento.preventDefault()

    // Validação: nenhum campo obrigatório pode estar vazio
    if (nome === '' || genero === '' || ano === '') {
      setErroValidacao('Preencha nome, gênero e ano antes de salvar.')
      return
    }

    setErroValidacao('')

    onCadastrar({
      nome: nome,
      genero: genero,
      ano: Number(ano),
      finalizado: finalizado,
    })

    // Limpa o formulário depois de enviar
    setNome('')
    setGenero('')
    setAno('')
    setFinalizado(false)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Novo jogo</h2>

      <label>
        Nome do jogo
        <input value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>

      <label>
        Gênero
        <input value={genero} onChange={(e) => setGenero(e.target.value)} />
      </label>

      <label>
        Ano de lançamento
        <input type="number" value={ano} onChange={(e) => setAno(e.target.value)} />
      </label>

      <label className="check">
        <input
          type="checkbox"
          checked={finalizado}
          onChange={(e) => setFinalizado(e.target.checked)}
        />
        Já finalizei este jogo
      </label>

      {erroValidacao && <p className="mensagem erro">{erroValidacao}</p>}

      <button type="submit">Salvar jogo</button>
    </form>
  )
}
