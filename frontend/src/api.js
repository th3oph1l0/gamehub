// Aqui ficam as funções que conversam com a API do Django (usando fetch).
const API_URL = 'http://127.0.0.1:8000/api/jogos/'

// Busca a lista de jogos. Se "nome" for passado, filtra pelo nome.
export async function listarJogos(nome) {
  const url = nome ? API_URL + '?nome=' + nome : API_URL
  const resposta = await fetch(url)

  if (!resposta.ok) {
    throw new Error('Erro ao buscar os jogos')
  }

  const dados = await resposta.json()
  return dados
}

// Envia um jogo novo para a API (POST).
export async function criarJogo(jogo) {
  const resposta = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jogo),
  })

  if (!resposta.ok) {
    throw new Error('Erro ao cadastrar o jogo')
  }

  const dados = await resposta.json()
  return dados
}

// Exclui um jogo pelo id (DELETE).
export async function excluirJogo(id) {
  const resposta = await fetch(API_URL + id + '/', {
    method: 'DELETE',
  })

  if (!resposta.ok) {
    throw new Error('Erro ao excluir o jogo')
  }
}
