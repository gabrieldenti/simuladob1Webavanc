import express from 'express';
import * as dotenv from "dotenv";

import pacienteRoutes from './routes/pacienteRoutes';
import consultaRoutes from './routes/consultaRoutes';
import agendaRoutes from './routes/agendaRoutes';
import secretariaRoutes from './routes/secretariaRoutes';


dotenv.config({ path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env" }); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', pacienteRoutes);
app.use('/api', consultaRoutes);
app.use('/api', agendaRoutes);
app.use('/api', secretariaRoutes);

if (process.env.PORT) {

    app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    });
}else {
  console.log("FFalha ao carregar o ambiente");
}