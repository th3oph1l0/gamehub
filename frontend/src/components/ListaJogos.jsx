import CardJogo from './CardJogo'

// Mostra a lista de jogos, ou uma mensagem se estiver vazia
export default function ListaJogos({ jogos, onPedirExclusao }) {
  if (jogos.length === 0) {
    return <p className="mensagem">Nenhum item cadastrado.</p>
  }

  return (
    <ul className="lista">
      {jogos.map((jogo) => (
        <CardJogo key={jogo.id} jogo={jogo} onPedirExclusao={onPedirExclusao} />
      ))}
    </ul>
  )
}
