import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Catalogo from "./Pages/Catalogo";
import Contacto from "./Pages/Contacto";
import Pijamas from "./Pages/Pijamas";
import Conjuntos from "./Pages/Conjuntos";
import Error from "./Pages/Error";





function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/Catalogo" element={<Catalogo />}></Route>
                    <Route path="/Catalogo/Pijamas" element={<Pijamas/>}></Route>
                    <Route path="/Catalogo/Conjuntos" element={<Conjuntos/>}></Route>
                    <Route path="/Contacto" element={<Contacto />}></Route>
                    <Route path="/Error" element={<Error />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

