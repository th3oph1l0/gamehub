// Janela de confirmação antes de excluir um jogo
export default function ModalExcluir({ jogo, onCancelar, onConfirmar }) {
  return (
    <div className="fundo-modal">
      <div className="modal">
        <h2>Excluir jogo</h2>
        <p>Tem certeza que deseja excluir "{jogo.nome}"?</p>
        <p className="aviso">Esta ação não poderá ser desfeita.</p>

        <div className="modal-botoes">
          <button onClick={onCancelar}>Cancelar</button>
          <button className="btn-excluir" onClick={onConfirmar}>Excluir</button>
        </div>
      </div>
    </div>
  )
}
