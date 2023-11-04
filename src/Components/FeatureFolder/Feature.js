import { NavLink } from "react-router-dom";
import { useGetData } from "../ContextApiFolder/ContextOne";
import "./Feature.css";
import FormatPrice from "../HelperFolder/FormatPrice";

const Feature = () => {
  const data = useGetData();
  const featuredItems = data.featureApiData;
  if (data.loading === true) {
    return (
      <>
        <h1 style={{fontSize:'3rem', textAlign:'center', color:'#000'}} >Loading...</h1>
      </>
    )
  };
  return (
    <>
      <section className="feature">
        <div className="featureText">
        <p className="check">check now!</p>
        <h2 className="featureHeading">Our Feature Services</h2>
        </div>
        <div className="featureSection">

          {
            featuredItems.map((data, index) => (
              <NavLink to={`/singleProducts/${data.id}`} style={{textDecoration:'none'}} key={index} >
              
              <div className="firstBox">
                <div className="categoriesbox">
              <figure>
              <img
                src={data.image}
                alt="products"
                width="100%"
                />
              </figure>
              <span className="categories" style={{color:"black"}} > {data.category} </span>
                </div>
              <div className="textpart">
                <p className="itemsName"> {data.name} </p>
                <p className="itemsPrice"> { <FormatPrice price = {data.price} /> } </p>
              </div>
            </div>

            </NavLink>
            ))
          }
          
        </div>
      </section>
    </>
  )
};

export default Feature;