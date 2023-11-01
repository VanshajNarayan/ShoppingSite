import "./Footer.css";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";


const Footer = () => {
  return (
    <>
      <footer className="footerSection" >
        <section className="footerBox" >
          <div className="firstDiv div">
            <p style={{fontSize:'1.3rem', marginBottom:'1rem'}} >Vanshaj Narayan</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="secondDiv div">
            <p style={{fontSize:'1.3rem', marginBottom:'1rem'}}>Subscribe to get important updates</p>
            <input type="text" id="input" style={{display:'block', maxWidth:'10rem', marginBottom:'1rem', border:'none', outline:'none'}} />
            <button style={{color:'#fff', padding:'0.7rem', cursor:'pointer', background:'#7743DB', border:'none', outline:'none'}} >Subscribe</button>
          </div>
          <div className="thirdDiv div">
            <p style={{fontSize:'1.3rem', marginBottom:'1rem'}} >Follow Us</p>
            <div className="iconsGroup">
              <a href="https://github.com/VanshajNarayan" rel="noreferrer" target="_blank"  style={{textDecoration:'none'}} > <BsGithub className="socialIcon" /> </a>
              <a href="https://www.linkedin.com/in/vanshaj-narayan" rel="noreferrer" target="_blank"  style={{textDecoration:'none'}} > <BiLogoLinkedin className="socialIcon" /> </a>
              <a href="https://github.com/VanshajNarayan" rel="noreferrer" target="_blank"  style={{textDecoration:'none'}} > <BsInstagram className="socialIcon" /> </a>      
            </div>
          </div>
          <div className="fourthDiv div">
            <p style={{fontSize:'1.3rem', marginBottom:'1rem'}} >Call us</p>
            <p>7717766172</p>
          </div>
        </section>
        <hr style={{marginTop:'2rem', marginBottom:'2rem'}} />
        <div className="lastSection">
          <p>&copy;2023 Vanshaj Narayan. All Rights Reserved</p>
          <div className="anotherDiv">
          <p>PRIVACY POLICY</p>
          <p>TERMS & CONDITIONS</p>
          </div>
        </div>
      </footer>
    </>
  )
};

export default Footer;