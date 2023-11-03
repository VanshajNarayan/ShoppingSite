import "./SingleTextPage.css";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { PiGrainsBold } from "react-icons/pi";
import { useState } from "react";

const SingleTextPage = () => {
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
        <p className="itemsName">Iphone X</p>
        <p>4.8</p>
        <p>
          Deal of the day : <span>400000</span>
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          voluptatibus sapiente architecto quod voluptate porro rerum hic
          voluptates veniam, fugit, provident recusandae quas tempore? Iure iste
          mollitia tenetur accusantium, dolorem, corrupti nam sunt asperiores a
          voluptas perferendis fugit, repellendus ipsam!
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
        <hr />
        <p>Available: <span>In Stock</span> </p>
        <p>ID: <span>yuytyutiutitit</span> </p>
        <p style={{marginBottom:'1rem'}} >Brand: <span>samsung</span> </p>
        <hr />
        <div className="colorsbox">
          <p style={{marginTop:'0'}}>Colors:</p>
          <div className="colors">
            <div style={{backgroundColor:'#000'}} className="color"></div>
            <div style={{backgroundColor:'#000'}} className="color"></div>
            <div style={{backgroundColor:'#000'}} className="color"></div>
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
