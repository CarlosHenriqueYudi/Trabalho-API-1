1. Listar Filmes (GET)
URL: http://localhost:3000/api/filmes

Query Params (Recursos Extras):
-ordenar por nome: http://localhost:3000/api/filmes?ordenar=nome
-Filtrar por gênero: http://localhost:3000/api/filmes?genero=Ação
-Buscar título específico: http://localhost:3000/api/filmes?busca=city
-Limitar resultados (Top 2): http://localhost:3000/api/filmes?limite=2
-Filtrar por diretor: http://localhost:3000/api/filmes?diretor=Nolan

Resposta:
[
    {
        "id": 1,
        "titulo": "Inception",
        "diretor": "Christopher Nolan",
        "ano": 2010,
        "genero": "Ficção Científica"
    },
    {
        "id": 2,
        "titulo": "Matrix",
        "diretor": "Lana Wachowski",
        "ano": 1999,
        "genero": "Ação"
    },
    {
        "id": 3,
        "titulo": "Parasita",
        "diretor": "Bong Joon-ho",
        "ano": 2019,
        "genero": "Suspense"
    },
    {
        "id": 4,
        "titulo": "Cidade de Deus",
        "diretor": "Fernando Meirelles",
        "ano": 2002,
        "genero": "Drama"
    },
    {
        "id": 5,
        "titulo": "Pulp Fiction",
        "diretor": "Quentin Tarantino",
        "ano": 1994,
        "genero": "Crime"
    },
    {
        "id": 6,
        "titulo": "Matrix",
        "diretor": "Lana Wachowski",
        "ano": 1999,
        "genero": "Ação"
    },
    {
        "id": 7,
        "titulo": "O Senhor dos Anéis: A Sociedade do Anel",
        "diretor": "Peter Jackson",
        "ano": 2001,
        "genero": "Fantasia"
    },
    {
        "id": 8,
        "titulo": "O Auto da Compadecida",
        "diretor": "Guel Arraes",
        "ano": 2000,
        "genero": "Comédia"
    },
    {
        "id": 9,
        "titulo": "Interestelar",
        "diretor": "Christopher Nolan",
        "ano": 2014,
        "genero": "Ficção Científica"
    },
    {
        "id": 10,
        "titulo": "Fragmentado",
        "diretor": "M. Night Shyamalan",
        "ano": 2016,
        "genero": "Suspense"
    }
]

2. Cadastrar Filme (POST)
URL: http://localhost:3000/api/filmes

Body (JSON):
{
    "titulo": "Fragmentado",
    "diretor": "M. Night Shyamalan",
    "ano": 2016,
    "genero": "Suspense"
}

Resposta:
{
    "id": 10,
    "titulo": "Fragmentado",
    "diretor": "M. Night Shyamalan",
    "ano": 2016,
    "genero": "Suspense"
}

Exemplos de requisição no Postman:
 -Post:
{
    "titulo": "Inception",
    "diretor": "Christopher Nolan",
    "ano": 2010,
    "genero": "Ficção Científica"
}

-Get:
{
    "id": 1
    "titulo": "Inception",
    "diretor": "Christopher Nolan",
    "ano": 2010,
    "genero": "Ficção Científica"
}

Capturas de tela:
-Post:
<img width="884" height="726" alt="image" src="https://github.com/user-attachments/assets/5aa901f1-fc47-4872-9216-81460a0a4357" />

-Get:
<img width="870" height="846" alt="image" src="https://github.com/user-attachments/assets/31dddca9-635a-4109-83f4-11c72d7c2a41" />

-Erro:
<img width="886" height="672" alt="image" src="https://github.com/user-attachments/assets/e58fad37-81c4-4e12-bcd5-24b654e7e8ee" />

-Ordenado por ordem alfabetica:
<img width="867" height="893" alt="image" src="https://github.com/user-attachments/assets/1a35bb3f-d617-43f9-a541-9941a916905b" />


O endpoint POST possui as seguintes validações:
-Campos Obrigatórios: Verifica se titulo, diretor, ano e genero foram enviados. Se faltar um, retorna erro 400.
-Tipos: O titulo deve ser uma String com no mínimo 2 caracteres.
-Ano: O campo ano deve ser um número entre 1895 e o ano atual + 5 anos.
-Tratamento de Erros: Caso os dados sejam inválidos, a API retorna uma mensagem, como: { "erro": "Ano de lançamento inválido." }.
