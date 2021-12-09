import { Express } from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js"; //aqui estarán los routes

const app = express();

//midleware
app.use(cors());
app.use(express.json());

app("/api/restaurants", restaurants); //especificamos cual va a ser nuestra direccion inicial, el root

export default app;
