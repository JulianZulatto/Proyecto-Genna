import { Outlet } from "react-router-dom";
import NavigationBar from "../components/Navbar";

function Layout (){

    return(
        <div>
            <NavigationBar/>
            <Outlet/>
            <footer>
                <p>Powered by Julian</p>
            </footer>
        </div>
    )
}

export default Layout;