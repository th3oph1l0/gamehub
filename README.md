# GameHub — Prática de Laboratório (React + Django)

Biblioteca de jogos: API REST em Django (backend) consumida por uma aplicação React (frontend).

## Como rodar

### 1. Backend (Django) — http://127.0.0.1:8000
```bash
cd backend
python -m venv .venv
.venv\Scripts\activate          # Windows  (Linux/Mac: source .venv/bin/activate)
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 2. Frontend (React + Vite) — http://localhost:5173
```bash
cd frontend
npm install
npm run dev
```

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/jogos/` | Lista os jogos |
| GET | `/api/jogos/?nome=mario` | Busca por nome (contém, sem diferenciar maiúsculas) |
| POST | `/api/jogos/` | Cadastra um jogo |
| DELETE | `/api/jogos/1/` | Exclui o jogo de id 1 |

## Model `Jogo`
`nome` (CharField), `genero` (CharField), `ano` (IntegerField), `finalizado` (BooleanField)

## Backend (`jogos/views.py`)
Duas funções simples com `@api_view`, sem ViewSet/Router:
- `lista_jogos`: trata GET (lista, com filtro por `?nome=`) e POST (cadastra)
- `excluir_jogo`: trata DELETE de um jogo pelo id

## Frontend
- `api.js` — as 3 funções que chamam a API (`listarJogos`, `criarJogo`, `excluirJogo`)
- `App.jsx` — guarda o estado (`useState`) e busca os jogos com `useEffect` toda vez que a busca muda
- `components/Header.jsx` — título e campo de pesquisa
- `components/FormJogo.jsx` — formulário com validação simples
- `components/ListaJogos.jsx` — usa `map` para desenhar a lista, e mostra "Nenhum item cadastrado." se estiver vazia
- `components/CardJogo.jsx` — um jogo da lista
- `components/ModalExcluir.jsx` — confirmação antes do DELETE

## Requisitos atendidos
**Obrigatórios:** Model com 4 campos (um BooleanField) · filtro `?nome=` · GET/POST/DELETE · listagem · formulário · botão excluir · interface atualizada pelo estado (sem `window.location.reload()`) · 4 componentes além do App · `useState`, `useEffect`, Fetch e `map` · renderização condicional · campo de pesquisa.

**Bônus:** total de registros · mensagem "Nenhum item cadastrado." · "Carregando..." · tratamento de erro amigável · validação de campos vazios · confirmação de exclusão.
