import HeroSection from "../HeroFolder/HeroSection";
import "./Home.css";

const Home = () => {
  const storeName = {
    name: 'Vanshaj Store',
  };
  return (
    <>
      <HeroSection storeName = {storeName} />
    </>
  )
};

export default Home;