import { Outlet } from "react-router-dom";


function Layout (){

    return(
        <div>
            <Outlet/>
            <footer>
                <p>Powered by Julian</p>
            </footer>
        </div>
    )
}

export default Layout;