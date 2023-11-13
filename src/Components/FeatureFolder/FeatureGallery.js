import ApiData from "../ApiFolder/ApiData";
import FormatPrice from "../HelperFolder/FormatPrice";
import { NavLink } from "react-router-dom";

const FeatureGallery = ({ productApi }) => {
  if (productApi === undefined) {
    productApi = ApiData;
  };
  return (
    <>
      {
            productApi?.map((data, index) => (
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
              <span className="categories" style={{color:"#7843dbc8", fontSize:'1.2rem', borderRadius:'10px 10px', background:'#fff', textTransform:'capitalize', padding:'0.5rem 1rem'}} > {data.category} </span>
                </div>
              <div className="textpart">
                <p className="itemsName"> {data.name} </p>
                <p className="itemsPrice"> { <FormatPrice price = {data.price} /> } </p>
              </div>
            </div>

            </NavLink>
            ))
          }
    </>
  )
};

export default FeatureGallery;