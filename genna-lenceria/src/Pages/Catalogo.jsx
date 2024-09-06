import { Link } from "react-router-dom"
import Categorias from "../components/Categorias"

function Catalogo() {

    return (
        <main>
            <h1>Catalogo</h1>
            <Categorias titulo="Pijamas" descripcion="Conoce nuestros mejores pijamas!" img="resources/Categoria Pijamas.png" url="/Catalogo/Pijamas" />
            <Categorias titulo="Conjuntos" descripcion="Conoce nuestros mejores Conjuntos!" img="resources/Categoria Conjuntos.png" url="/Catalogo/Conjuntos"/>
        </main>
    )
}

export default Catalogo
