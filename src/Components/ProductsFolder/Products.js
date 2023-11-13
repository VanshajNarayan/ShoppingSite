import { useGetData, useGetDispatch } from "../ContextApiFolder/ContextOne";
import FeatureGallery from "../FeatureFolder/FeatureGallery";
import "./Products.css";
import "../FeatureFolder/Feature.css";
import SelectOption from "./SelectOption";
import Category from "./Category";
import { useState } from "react";
import { useSecondData } from "../ContextApiFolder/ContextTwo";
import ApiData from "../ApiFolder/ApiData";

const Products = () => {
  const [inputValue, setInputValue] = useState("");
  const stateData = useGetData();
  const secondState = useSecondData();
  const { allApiData } = stateData;
  const alphabeticalOption = [
    "lowPrice",
    "highPrice",
    "Price(a-z)",
    "Price(z-a)",
  ];
  const pFilter = { name: "PriceFilter" };
  const cFilter = { name: "CompanyFilter" };
  const companyLists = [
    "All",
    "Apple",
    "Samsung",
    "Dell",
    "Nokia",
    "Asus",
    "Lenova",
    "Rolex",
  ];
  const colorsList = ["#ff0000", "#000000", "#CDD0D0", "#22D3EF", "#000"];
  const dispatch = useGetDispatch();
  return (
    <>
      <section className="productSection">
        <div className="feature">
          <div className="selectOptionBox">
            <div className="selectFirstSection">
              <div className="searchSection">
                <input
                  type="search"
                  id="searchInput"
                  autoComplete="off"
                  placeholder="Search Products"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    dispatch({ type: "searchItems", payload: inputValue });
                  }}
                />
              </div>

              <div className="categorySection">
                <Category />
              </div>
            </div>

            <div className="selectSecondSection">
              <div className="optionSelect">
                <SelectOption options={companyLists} heading = {cFilter}  />
              </div>
              <div className="colorsSection">
                <div className="colorheading">
                  <p
                    style={{
                      color: "#000",
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      margin: "1rem 0",
                    }}>
                    Colors
                  </p>
                </div>
                <div className="colorBox">
                  <p style={{ color: "#000", fontSize: "1.3rem" }} onClick= {(e) => dispatch({type:'allClr', payload:{text:e.target, secondState:secondState}})} >All</p>
                  {colorsList.map((clr, index) => (
                    <div
                      key={index}
                      className="colorType"
                      onClick={() =>
                        dispatch({ type: "colorLogic", payload: { clr: clr, secondState: secondState } })
                      }
                      style={{ backgroundColor: `${clr}` }}></div>
                  ))}
                </div>
              </div>
              <div className="buttonSection">
                <button
                  onClick={() => {
                    dispatch({ type: "clearFilter", payload: secondState });
                  }}
                  style={{
                    color: "#fff",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    marginTop: "1rem",
                    backgroundColor: "#B2533E",
                    padding: "0.6rem 1.5rem",
                    fontSize: "1.4rem",
                  }}>
                  Clear Filter
                </button>
              </div>
            </div>

            <div className="selectThirdSection"></div>
            <div className="selectFourthSection"></div>
            <div className="selectFifthSection"></div>
          </div>

          <div className="photoGalleyBox">
            <div className="firstSection">
              <p style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color:'#000' }}>
                {typeof allApiData?.length === "number" ? allApiData?.length : ApiData?.length } total products
              </p>
              <div className="optionSelect">
                <SelectOption options={alphabeticalOption} heading = {pFilter} />
              </div>
            </div>

            <div className="featureSection">
              <FeatureGallery productApi={allApiData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
