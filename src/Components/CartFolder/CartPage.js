import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useGetDispatch } from "../ContextApiFolder/ContextOne";
import FormatPrice from "../HelperFolder/FormatPrice";

const CartPage = ({ cartItems }) => {
  let [itemQuantity, setItemQuantity] = useState(cartItems.ItemQuatity);
  let [subTotal, setSubTotal] = useState(cartItems.price * cartItems.ItemQuatity);
  const dispatch = useGetDispatch();
  const handleItemMinus = () => {
    if (itemQuantity > 1) {
      setItemQuantity(--itemQuantity);
      setSubTotal(subTotal - cartItems.price);
    }
  };
  const handleItemPlus = () => {
    if (itemQuantity < 5) {
      setItemQuantity(++itemQuantity);
      setSubTotal(subTotal + cartItems.price);
    }
  };
  return (
    <>
      <div className="cartItemsBox">
        <div className="cartItems cartItemsOne">
          <div className="ItemsImage">
            <img
              src={cartItems.image[0].url}
              alt="Iphone Mobile"
              width="100%"
            />
          </div>
          <div className="itemNameAndColor">
            <p style={{ marginBottom: "1rem" }}> {cartItems.name} </p>
            <div className="colorbox">
              Color :
              <div
                className="color"
                style={{ backgroundColor: `${cartItems.colors}` }}></div>
            </div>
          </div>
        </div>
        <p className="cartItems gridCenter"> { <FormatPrice price = {subTotal} />} </p>
        <div
          className="cartItems gridCenter"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <span
            style={{ fontSize: "4rem", cursor: "pointer" }}
            onClick={handleItemMinus}>
            -
          </span>
          <span> {itemQuantity} </span>
          <span
            style={{ fontSize: "2rem", cursor: "pointer" }}
            onClick={handleItemPlus}>
            +
          </span>
        </div>
        <p className="cartItems gridCenter"> { <FormatPrice price = {cartItems.price} />} </p>
        <p
          className="cartItems gridCenter"
          style={{ color: "red", fontSize: "2rem", cursor: "pointer" }}
          onClick={() =>
            dispatch({ type: "deleteItems", CartItems: cartItems })
          }>
          <MdDelete />
        </p>
      </div>
    </>
  );
};

export default CartPage;
