import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Catalogo from "./Pages/Categorias-Catalogo/Catalogo";
import Contacto from "./Pages/Contacto";
import Pijamas from "./Pages/Pijamas";
import Conjuntos from "./Pages/Conjuntos";
import Error from "./Pages/Error";
import BikinisyMallas from "./Pages/Bikinis-Mallas";
import SexShop from "./Pages/SexShop";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemDetail from "./components/ItemDetailContainer/ItemDetail";





function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/Catalogo" element={<Catalogo />}></Route>
                    <Route path="/Catalogo/Pijamas" element={<Pijamas/>}></Route>
                    <Route path="/Catalogo/Pijamas/:productoId" element={<ItemDetail/>}/>
                    <Route path="/Catalogo/Conjuntos" element={<Conjuntos/>}></Route>
                    <Route path="/Catalogo/BikinisyMallas" element={<BikinisyMallas/>}></Route>
                    <Route path="/Catalogo/SexShop" element={<SexShop/>}></Route>
                    <Route path="/Contacto" element={<Contacto />}></Route>
                    <Route path="/*" element={<Error />}></Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

