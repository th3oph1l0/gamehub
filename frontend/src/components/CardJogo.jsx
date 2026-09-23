// Um item da lista de jogos
export default function CardJogo({ jogo, onPedirExclusao }) {
  return (
    <li className="card">
      <div>
        <h3>{jogo.nome}</h3>
        <p>{jogo.genero} — {jogo.ano}</p>
      </div>

      <span className={jogo.finalizado ? 'selo ok' : 'selo pendente'}>
        {jogo.finalizado ? 'Finalizado' : 'Não finalizado'}
      </span>

      <button className="btn-excluir" onClick={() => onPedirExclusao(jogo)}>
        Excluir
      </button>
    </li>
  )
}
