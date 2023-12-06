import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { useGetData } from "../ContextApiFolder/ContextOne";

const Navbar = () => {
  const [showHidden, setShowHidden] = useState(false);
  const state = useGetData();
  return (
    <>
      <nav className="Nav">
        <div className="navbar_container">
          <div className="logo"> Vanshaj Store</div>
          <ul className="items">
            <li className="active">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/products">PRODUCTS</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
            <li>
              <NavLink className="cartIcon" to="/cart"> <AiOutlineShoppingCart/> <span> {state.cartBucket.length} </span> </NavLink>
            </li>
          </ul>
        <div className="menu_icons" onClick={() => setShowHidden(!showHidden)} >
          {
            showHidden ? <RxCross1 style={{fontSize:'2rem', cursor:'pointer'}} /> : <AiOutlineMenu style={{fontSize:'2rem', cursor:'pointer'}} />
          }          
        </div>
        </div>
      </nav>
      {
        showHidden && <MobileNavbar showHidden = {showHidden} setShowHidden = {setShowHidden} />
      }
    </>
  );
};

export default Navbar;
