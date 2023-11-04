import "./SingleTextPage.css";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { PiGrainsBold } from "react-icons/pi";
import { useState } from "react";

const SingleTextPage = ({apiId}) => {
  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <section className="textBox_section">
        <p className="itemsName" style={{marginBottom: '1rem'}} > {apiId.name} </p>
        <p style={{marginBottom: '1rem'}} > {apiId.stars} </p>
        <p style={{marginBottom: '1rem'}} >MRP:<span style={{textDecoration: 'line-through'}} > {apiId.price+2500} </span> </p>
        <p style={{marginBottom: '1rem'}} >
          Deal of the day : <span> {apiId.price} </span>
        </p>
        <p style={{marginBottom: '1rem'}} >
          {apiId.description}
        </p>
        <div className="textIcons">
          <div className="firstIcons icons">
            <TbTruckDelivery className="icon"/>
            <p>Free Delivery</p>
          </div>
          <div className="secondIcons icons">
            <TbReplace className="icon" />
            <p>30 Days Replacement</p>
          </div>
          <div className="thirdIcons icons">
          <TbTruckDelivery className="icon"/>
          <p>Vanshaj Delivered</p>
          </div>
          <div className="fourthIcons icons">
            <PiGrainsBold className="icon" />
            <p>2 Years Warranty</p>
          </div>
        </div>
        <hr style={{marginBottom: '1rem'}} />
        <p style={{marginBottom: '1rem'}} >Available: <span> {apiId.stock > 0 && apiId.stock} </span> </p>
        <p style={{marginBottom: '1rem'}} >ID: <span> {apiId.id} </span> </p>
        <p style={{ marginBottom: '1rem' }} >Brand: <span>{apiId.company}</span> </p>
        <hr />
        <div className="colorsbox">
          <p className="colorpara" >Colors:</p>
          <div className="colors">
            {
              apiId.colors.map((clr, index) => (
                <div key={index} style={{backgroundColor:`${clr}`}} className="color"></div>
              ))
            }
          </div>
        </div>
        <div className="updateQuantity">
          <div className="quantityIcon" onClick={handleMinus} > - </div>
          <div style={{fontSize:'1.7rem', fontWeight:'700'}} className="quantityIcon"> {quantity} </div>
          <div className="quantityIcon" onClick={handlePlus} >+</div>
        </div>
        <button className="cartBtn">ADD TO CART</button>
      </section>
    </>
  );
};

export default SingleTextPage;
