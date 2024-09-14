
import Categorias from "../components/Categorias"
import "../style/catalogo.css"

function Catalogo() {

    return (
        <main>
            <h1>Catalogo</h1>
            <div className="Catalogo">
            <Categorias titulo="Pijamas" descripcion="Conoce nuestros mejores pijamas!" img="resources/Categoria Pijamas.png" url="/Catalogo/Pijamas" />
            <Categorias titulo="Conjuntos" descripcion="Conoce nuestros mejores Conjuntos!" img="resources/Categoria Conjuntos.png" url="/Catalogo/Conjuntos"/>
            <Categorias titulo="Bikinis y Mallas" descripcion="Conoce nuestras mejores Bikinis y Mallas!" img="resources/Categoria Bikinis y mallas.png" url="/Catalogo/BikinisyMallas"/>
            <Categorias titulo="SexShop" descripcion="Conoce nuestro SexShop!" img="resources/Categoria SexShop.png" url="/Catalogo/SexShop"/>
            </div>
        </main>
    )
}

export default Catalogo
