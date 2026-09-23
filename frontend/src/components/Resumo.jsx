export default function Resumo({ total, exibindo }) {
  return (
    <section className="resumo">
      <div>
        <strong>{total}</strong>
        <span>{total === 1 ? 'jogo cadastrado' : 'jogos cadastrados'}</span>
      </div>
      <p>
        Mostrando {exibindo} de {total}
      </p>
    </section>
  )
}
