import { useGetData } from "../ContextApiFolder/ContextOne";
import FeatureGallery from "../FeatureFolder/FeatureGallery";
import "./Products.css";
import "../FeatureFolder/Feature.css";
import SelectOption from "./SelectOption";
import Category from "./Category";

const Products = () => {
  const stateData = useGetData();
  const { allApiData } = stateData;
  const alphabeticalOption = ["lowPrice", "highPrice", "Price(a-z)", "Price(z-a)"];
  const companyLists = ["All", "Apple", "samsung", "Dell", "Nokia", "Asus", "Lenova", "Rolex"];
  const colorsList = ["#ff0000", "#000000", "#CDD0D0", "#22D3EF", "#000"];
  return (
    <>
      <section className="productSection">
        <div className="feature">

          <div className="selectOptionBox">

            <div className="selectFirstSection">

            <div className="searchSection">
              <input type="search" name="search" id="searchInput" autoComplete="off" placeholder="Search Products" />
            </div>

            <div className="categorySection">
              <Category/>
            </div>

            </div>

            <div className="selectSecondSection">
              <div className="optionSelect">
                <SelectOption options={companyLists} />
              </div>
              <div className="colorsSection">
                <div className="colorheading">
                <p style={{color:'#fff', fontSize:'1.5rem', fontWeight:'600', margin:'1rem 0'}}>Colors</p>
                </div>
                <div className="colorBox">
                  <p style={{color:'#fff', fontSize:'1.3rem'}} >All</p>
                  {
                    colorsList.map((clr, index) => (
                      <div key={index} className="colorType" style={{backgroundColor:`${clr}`}} ></div>
                    ))
                  }
                </div>
              </div>
              <div className="buttonSection">
                <button style={{color:'#fff', border:'none', outline:'none', cursor:'pointer', marginTop:'1rem', backgroundColor:'#B2533E', padding:'0.6rem 1.5rem', fontSize:'1.4rem'}} >Clear Filter</button>
              </div>
            </div>

            <div className="selectThirdSection"></div>
            <div className="selectFourthSection"></div>
            <div className="selectFifthSection"></div>
              
          </div>

          <div className="photoGalleyBox">

            <div className="firstSection">
              <p style={{fontSize:'1.5rem', marginBottom:'0.5rem'}} > {allApiData.length} total products</p>
              <div className="optionSelect">
                <SelectOption options = {alphabeticalOption} />
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
