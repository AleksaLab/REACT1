import '../main.css';
import { Link } from "react-router-dom";
import TRADE1 from '../photos/TRADE1.png';
import logo from '../photos/logo.mp4';
import cart from '../photos/cart.png';


function Header() {
    return (
      <mn class = "mn">
        <video class="header" src={logo} autoPlay loop muted alt="logo"/>
        <img class="img" src={TRADE1} alt="logo"/>
-
        <dw class = "dwH">
          <Link class = "col" to="/Home"> O nas </Link>
          <Link class="ods" to="/Pop"> Popularne </Link>
          <Link class="ods" to="/Klas"> Klasyki </Link>
          <Link class="ods" to="/Comms"> Opinie </Link> 
        </dw>
        

        
        </mn>
    );
  }
  
export default Header;