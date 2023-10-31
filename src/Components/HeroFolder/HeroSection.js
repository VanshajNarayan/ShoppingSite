import { NavLink } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = ({storeName}) => {
  return (
    <>
      <section className="hero">
        <div className="heroSection">
          <div className="textPart">
            <p className="welcome">Welcome To</p>
            <h2 className="storeName"> {storeName.name} </h2>
            <p className="HeroPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas
              at quidem saepe suscipit impedit unde! Odit, nemo optio?
              Voluptates inventore error non deserunt dolore provident, aperiam
              soluta dicta exercitationem.
            </p>
            <NavLink to="/products">
            <button className="btn">Shop now</button>
            </NavLink>
          </div>
          <div className="imagePart">
            <figure>
              <img
                src="https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="shopping moment"
                width="100%"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
