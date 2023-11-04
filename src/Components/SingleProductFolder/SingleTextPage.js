import "./SingleTextPage.css";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { PiGrainsBold } from "react-icons/pi";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";
import { useState } from "react";
import FormatPrice from "../HelperFolder/FormatPrice";

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

  const ratings = Array.from({ length: 5 }, (_, index) => {
    let pointNumber = index + 0.5;

    return (
      <span key={index}>
        {
          apiId.stars > index + 1 ? <AiTwotoneStar /> : apiId.stars > pointNumber ? <BiSolidStarHalf /> : <AiOutlineStar />
        }
      </span>
    )
  });

  return (
    <>
      <section className="textBox_section">
        <p className="itemsName" style={{marginBottom: '1rem', fontWeight:'700', textTransform:'capitalize', fontSize:'2rem'}} > {apiId.name} </p>
        <p style={{marginBottom: '1rem'}} > {ratings} <span> ({apiId.reviews} customer reviews) </span> </p>
        <p style={{marginBottom: '1rem'}} >MRP:<span style={{textDecoration: 'line-through', fontWeight:'700'}} > { <FormatPrice price={apiId.price+350000}/> } </span> </p>
        <p style={{marginBottom: '1rem', color:'#7743DB'}} >
          Deal of the day : <span style={{fontWeight:'700'}}> { <FormatPrice price={apiId.price}/> }   </span>
        </p>
        <p style={{marginBottom: '1rem'}} >
          {apiId.description}
        </p>
        <div className="textIcons">
          <div className="firstIcons icons">
            <TbTruckDelivery className="icon"/>
            <p style={{color:'#000'}} >Free Delivery</p>
          </div>
          <div className="secondIcons icons">
            <TbReplace className="icon" />
            <p style={{color:'#000'}} >30 Days Replacement</p>
          </div>
          <div className="thirdIcons icons">
          <TbTruckDelivery className="icon"/>
          <p style={{color:'#000'}} >Vanshaj Delivered</p>
          </div>
          <div className="fourthIcons icons">
            <PiGrainsBold className="icon" />
            <p style={{color:'#000'}} >2 Years Warranty</p>
          </div>
        </div>
        <hr style={{marginBottom: '1rem'}} />
        <p style={{marginBottom: '1rem'}} >Available: <span style={{fontWeight:'900'}} > {apiId.stock > 0 && apiId.stock} </span> </p>
        <p style={{marginBottom: '1rem'}} >ID: <span style={{fontWeight:'900'}} > {apiId.id} </span> </p>
        <p style={{ marginBottom: '1rem' }} >Brand: <span style={{fontWeight:'900'}} >{apiId.company}</span> </p>
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
          <div style={{fontSize:'1.7rem', fontWeight:'700', color:'#7843dbc8'}} className="quantityIcon"> {quantity} </div>
          <div className="quantityIcon" onClick={handlePlus} style={{fontWeight:'900', fontSize:'2rem'}} >+</div>
        </div>
        <button className="cartBtn">ADD TO CART</button>
      </section>
    </>
  );
};

export default SingleTextPage;
