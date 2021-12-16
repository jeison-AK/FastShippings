import express from "express";
import cors from "cors";
import statuses from "./api/statuses.route.js"; //aqui estarán los routes

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/statuses", statuses); //especificamos cual va a ser nuestra direccion inicial, el root
// app.use("/api/v1/rutes", rutes); //especificamos cual va a ser nuestra direccion inicial, el root

app.use("*", (req, res) => res.status(404).json({ error: "not found" })); // por si alguien va a una ruta que no existe
//retorna "not found"

export default app;
