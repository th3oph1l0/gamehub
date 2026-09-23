// Cabeçalho do site: título + campo de pesquisa
export default function Header({ busca, onBuscar }) {
  return (
    <header className="header">
      <h1>GameHub</h1>
      <input
        type="text"
        placeholder="Pesquisar jogos por nome..."
        value={busca}
        onChange={(evento) => onBuscar(evento.target.value)}
      />
    </header>
  )
}
