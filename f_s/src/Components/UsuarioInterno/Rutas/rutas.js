import "./rutas.css"
import NavBarUI from "../../Comun/NavBar/NavBar_UI";
import Footer from "../../Comun/footer/footer";
import Separador from "../../Comun/Separador/separador";


export default function Rutas() {
    return (
        <div class="container-md">
            <nav>
                <NavBarUI />
            </nav>
            <Separador />
            <form class="row g-3">
                <h1>Rutas</h1>
                <div class="col-md-4">
                    <label class="form-label">Punto de origen</label>
                    <input type="text" class="form-control" placeholder="Digite el punto de origen" aria-label="Punto de origen" />
                </div>
                <div class="col-md-4">
                    <label class="form-label">Punto de destino</label>
                    <input type="text" class="form-control" placeholder="Digite el punto de destino" aria-label="Punto de destino" />
                </div>
                <div class="col-md-4">
                    <label class="form-label">Valor por kilometro</label>
                    <input type="text" class="form-control" placeholder="Digite el valor por km" aria-label="Valor por kilometro" />
                </div>
                <div class="col-md-4">
                    <label class="form-label">Distancia (KM)</label>
                    <input type="text" class="form-control" placeholder="Digite la distancia en km" aria-label="Distancia km" />
                </div>
                <div class="col-md-4">
                    <label class="form-label">Tiempo</label>
                    <input type="text" class="form-control" placeholder="Digite el tiempo de la ruta" aria-label="Tiempo" />
                </div>
                <div class="col-md-4">
                    <label class="form-label">Valor ruta</label>
                    <input type="text" class="form-control" placeholder="Digite el valor de la ruta" aria-label="Valor ruta" />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Añadir ruta</button>
                </div>
            </form>

            <Separador />

            <div class="row g-3">
                <h1>Lista de Rutas</h1>
                <table class="table">
                    <thead class="table-light">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Punto de origen</th>
                        <th scope="col">Punto de destino</th>
                        <th scope="col">Distancia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2"></td>
                        <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Separador />
            <footer>
                <Footer />
            </footer>
        </div>

  
    )
}