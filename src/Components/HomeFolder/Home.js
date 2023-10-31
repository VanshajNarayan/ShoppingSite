import Feature from "../FeatureFolder/Feature";
import HeroSection from "../HeroFolder/HeroSection";
import "./Home.css";

const Home = () => {
  const storeName = {
    name: 'Vanshaj Store',
  };
  return (
    <>
      <HeroSection storeName = {storeName} />
      <Feature/>
    </>
  )
};

export default Home;