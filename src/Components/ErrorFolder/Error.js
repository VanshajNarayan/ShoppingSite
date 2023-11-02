import { NavLink } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <>
      <section className="errorSection">
        <div className="errorBox">
          <p className="headingError">404</p>
          <p className="errorMsg">UH OH! You're lost.</p>
          <p className="errorPara">
            The page you are looking for does not exist. How you got here is a
            mystery. BUt you can click the button below to go back to the
            homepage.
          </p>
          <NavLink to="/">
            <button className="errorBtn">HOME</button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Error;
