import { Outlet } from "react-router-dom";
import NavigationBar1 from "../pages/Navbar/NavigationBar1";

const DescriptionLayout = () => {
    return (
        <div>
            <NavigationBar1></NavigationBar1>
            <Outlet></Outlet>
        </div>
    );
};

export default DescriptionLayout;