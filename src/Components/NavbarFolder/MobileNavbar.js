import "./MobileNavbar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useGetData } from "../ContextApiFolder/ContextOne";

const MobileNavbar = ({showHidden, setShowHidden}) => {
  const state = useGetData();
  return (
    <>
    <div className="mobileNav">
      <ul className="item" onClick={() => setShowHidden(!showHidden)} >
        <li className="active">
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
            <AiOutlineShoppingCart /> <span> {state.cartBucket.length} </span>
          </NavLink>
        </li>
      </ul>
    </div>
    </>
  );
};

export default MobileNavbar;
