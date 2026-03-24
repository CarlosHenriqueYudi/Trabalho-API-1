const express = require('express');
const app = express();
app.use(express.json());

let filmes = [
    { id: 1, titulo: "Inception", diretor: "Christopher Nolan", ano: 2010, genero: "Ficção Científica" },
    { id: 2, titulo: "Matrix", diretor: "Lana Wachowski", ano: 1999, genero: "Ação" },
    { id: 3, titulo: "Parasita", diretor: "Bong Joon-ho", ano: 2019, genero: "Suspense" },
    { id: 4, titulo: "Cidade de Deus", diretor: "Fernando Meirelles", ano: 2002, genero: "Drama" },
    { id: 5, titulo: "Pulp Fiction", diretor: "Quentin Tarantino", ano: 1994, genero: "Crime" }
];

app.get('/api/filmes', (req, res) => {
    let resultado = [...filmes];
    const { ordenar, genero, busca, limite, diretor } = req.query;

    if (genero) {
        resultado = resultado.filter(f => f.genero.toLowerCase() === genero.toLowerCase());
    }

    if (busca) {
        resultado = resultado.filter(f => f.titulo.toLowerCase().includes(busca.toLowerCase()));
    }

    if (diretor) {
        resultado = resultado.filter(f => f.diretor.toLowerCase().includes(diretor.toLowerCase()));
    }

    if (ordenar === 'nome') {
        resultado.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (ordenar === 'ano') {
        resultado.sort((a, b) => a.ano - b.ano);
    }

    if (limite) {
        resultado = resultado.slice(0, parseInt(limite));
    }

    res.json(resultado);
});

app.post('/api/filmes', (req, res) => {
    const { titulo, diretor, ano, genero } = req.body;

    if (!titulo || !diretor || !ano || !genero) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
    }

    if (typeof titulo !== 'string' || titulo.length < 2) {
        return res.status(400).json({ erro: "Título inválido." });
    }

    const anoAtual = new Date().getFullYear();
    if (typeof ano !== 'number' || ano < 1895 || ano > anoAtual + 5) {
        return res.status(400).json({ erro: "Ano de lançamento inválido." });
    }

    const novoFilme = {
        id: filmes.length + 1,
        titulo,
        diretor,
        ano,
        genero
    };

    filmes.push(novoFilme);
    res.status(201).json(novoFilme);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor ativo em http://localhost:${PORT}`));
