import { NavLink } from "react-router-dom";
import { useGetData, useGetDispatch } from "../ContextApiFolder/ContextOne";
import "./Cart.css";
import CartPage from "./CartPage";
import FormatPrice from "../HelperFolder/FormatPrice";

const Cart = () => {
  const state = useGetData();
  const dispatch = useGetDispatch();
  const handleClearChart = () => {
    dispatch({ type: "clearChart" });
  };
  return (
    <>
      <section className="cartSection">
        <div className="cartBox">
          <div className="cartHeadingBox">
            <p className="cartHeading">Item</p>
            <p className="cartHeading">Price</p>
            <p className="cartHeading">Quantity</p>
            <p className="cartHeading">SubTotal</p>
            <p className="cartHeading">Remove</p>
          </div>
          <hr style={{margin:'1rem'}} />
          {
            state.cartBucket.map((items, index) => <CartPage key={index} cartItems={items} /> )
          }
          <hr style={{margin:'1rem'}} />
          <div className="cartspageBtns">
            <NavLink to='/products'>
              <button className="cartBtn">Continue Shopping</button>
            </NavLink>
            <button className="cartBtn" style={{backgroundColor:'#FF6C22'}} onClick={handleClearChart} >Clear Chart</button>
          </div>
        </div>
        <div className="totalBox">
          <div className="totalDetail">
            <p>subTotal : <span> { <FormatPrice price = {2000000} />} </span></p>
            <p>shipping fee : <span> { <FormatPrice price = {2000000} />} </span></p>
            <hr />
            <p>Oder Total : <span> { <FormatPrice price = {2000000} />} </span></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
