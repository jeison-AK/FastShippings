import express from "express";
import cors from "cors";
import estados from "./api/usuarioExterno.route.js"; //aqui estarán los routes

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/estados", estados); //especificamos cual va a ser nuestra direccion inicial, el root
//EJEMPLO app.use("/api/v1/admin", admin); //no se olviden de importar el .route

app.use("*", (req, res) => res.status(404).json({ error: "not found" })); // por si alguien va a una ruta que no existe
//retorna "not found"

export default app;
