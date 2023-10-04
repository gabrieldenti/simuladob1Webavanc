import express from 'express';
import * as dotenv from "dotenv";

import { router } from './routes';

dotenv.config({ path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env" }); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

app.use(router);


app.use((req, res, next) => {
  const err = new Error('Rota não encontrada');
  res.status(404).json({ error: err.message });
});


if (process.env.PORT) {

    app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    });
}else {
  console.log("Falha ao carregar o ambiente");
}