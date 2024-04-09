import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";
import Footer from "../pages/shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
            <NavBar/>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;