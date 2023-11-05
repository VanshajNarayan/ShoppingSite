import { useGetData } from "../ContextApiFolder/ContextOne";
import "./Feature.css";
import FeatureGallery from "./FeatureGallery";

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

          <FeatureGallery productApi = {featuredItems} />
          
        </div>
      </section>
    </>
  )
};

export default Feature;