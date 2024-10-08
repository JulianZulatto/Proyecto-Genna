import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Catalogo from "./Pages/Categorias-Catalogo/Catalogo";
import Contacto from "./Pages/Contacto";
import Error from "./Pages/Error";
import CartDetail from "./components/Cart/CartDetail.jsx"
import CartContextProvider from "./components/Cart/CartContextProvider.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";







function App() {
    return (
        <>

            <BrowserRouter>
                <CartContextProvider>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />}></Route>
                            <Route path="/Catalogo" element={<Catalogo />}></Route>
                            <Route path="/Catalogo/:categoryId/" element={<ItemListContainer />}></Route>
                            <Route path="/Catalogo/:categoryId/:productoId" element={<ItemDetailContainer/>} />
                            <Route path="/Contacto" element={<Contacto />}></Route>
                            <Route path="/CartDetail" element={<CartDetail />}></Route>
                            <Route path="/*" element={<Error />}></Route>

                        </Route>
                    </Routes>
                </CartContextProvider>
            </BrowserRouter>

        </>
    )
}

export default App

