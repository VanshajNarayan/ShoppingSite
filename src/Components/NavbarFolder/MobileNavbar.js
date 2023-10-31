import "./MobileNavbar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const MobileNavbar = ({showHidden, setShowHidden}) => {
  return (
    <>
    <div className="mobileNav">
      <ul className="item" onClick={() => setShowHidden(!showHidden)} >
        <li>
          <NavLink to="/" className="anchor" >HOME</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="anchor" >ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/products" className="anchor" >PRODUCTS</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="anchor" >CONTACT</NavLink>
        </li>
        <li>
          <NavLink className="cartIcon anchor" to="/cart">
            <AiOutlineShoppingCart /> <span>0</span>
          </NavLink>
        </li>
      </ul>
    </div>
    </>
  );
};

export default MobileNavbar;
