import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../pages/Navbar/NavigationBar';
import background from "../assets/images/Rectangle1.png"

import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div className=' w-100 vh-100' style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", filter: "brightness(.9)" }}>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>


        </div>
    );
};

export default Main;