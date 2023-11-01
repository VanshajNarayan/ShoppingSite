import Feature from "../FeatureFolder/Feature";
import Footer from "../FooterFolder/Footer";
import HeroSection from "../HeroFolder/HeroSection";
import Service from "../ServiceFolder/Service";
import "./Home.css";

const Home = () => {
  const storeName = {
    name: 'Vanshaj Store',
  };
  return (
    <>
      <HeroSection storeName = {storeName} />
      <Feature/>
      <Service/>
      <Footer/>
    </>
  )
};

export default Home;