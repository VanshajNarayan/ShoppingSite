import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { useGetDispatch } from "../ContextApiFolder/ContextOne";
import FormatPrice from "../HelperFolder/FormatPrice";

const CartPage = ({ cartItems }) => {

  const dispatch = useGetDispatch();

  const handleItemMinus = () => {
    if (cartItems.ItemQuatity > 1) {
      dispatch({ type: "quatityminus", cartMenu : cartItems });
      cartItems.subTotal = cartItems.subTotal - cartItems.price;
    };
  };

  const handleItemPlus = () => {
    if (cartItems.ItemQuatity < 5) {
      dispatch({ type: "quatityplus", cartMenu : cartItems });
      cartItems.subTotal = cartItems.subTotal + cartItems.price;
    };
  };

    useEffect(() => {
      cartItems.subTotalAmount = cartItems.subTotal;
      dispatch({ type: "AddSubTotal" });
  // eslint-disable-next-line
    }, [cartItems.ItemQuatity]);

  return (
    <>
      <div className="cartItemsBox">
        <div className="cartItems cartItemsOne">
          <div className="ItemsImage">
            <img
              src={cartItems.images[0].url}
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
        <p className="cartItems gridCenter"> { <FormatPrice price = {cartItems.price} />} </p>
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
          <span> {cartItems.ItemQuatity} </span>
          <span
            style={{ fontSize: "2rem", cursor: "pointer" }}
            onClick={handleItemPlus}>
            +
          </span>
        </div>
        <p className="cartItems gridCenter"> { <FormatPrice price = {cartItems.subTotal} />} </p>
        <p
          className="cartItems gridCenter"
          style={{ color: "red", fontSize: "2rem", cursor: "pointer" }}
          onClick={() =>
          {
            dispatch({ type: "deleteItems", CartItems: cartItems });
          }
          }>
          <MdDelete />
        </p>
      </div>
    </>
  );
};

export default CartPage;
