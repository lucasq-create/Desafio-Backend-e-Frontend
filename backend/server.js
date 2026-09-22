const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json([
        {
            nome: "Notebook",
            preco: 4690,
            categoria: "Eletrônicos",
            imagem: "notebook.jpg"
        },
        {
            nome: "Fone Bluetooth",
            preco: 120,
            categoria: "Eletrônicos",
            imagem: "fone.jpg"
        },
        {
            nome: "Mochila Escolar",
            preco: 89,
            categoria: "Acessórios",
            imagem: "mochila.jpg"
        }
    ]);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});