import { useState } from "react";
import "./SinglePage.css";
import SingleTextPage from "./SingleTextPage";

const SinglePage = ({ images, apiId }) => {
  const [imgArr] = images;
  const data = imgArr?.slice(0, 1);
  const [selectImg, setSelectImg] = useState();
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="singlepage_Section">
        <div className="singlepage_box">
          <div className="imagebox">
            <div className="imageSection">
              {imgArr?.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={img.filename}
                  width="100%"
                  className="chooseImg"
                  onClick={() => {
                    setSelectImg(img.url);
                    setShow(true);
                  }}
                />
              ))}
            </div>
            <div className="clickimage_Section">
              {
                show ? (
                    <img
                      src={selectImg}
                      alt={selectImg}
                      width="100%"
                      className="clickImage"
                    />
                ) : (
                  data?.map((items, index) => (
                  <img
                    key={index}
                    src={items.url}
                    alt={items.filename}
                    width="100%"
                    className="clickImage"
                  />
                )))
              }
              
            </div>
          </div>
          <div className="textBox">
            {
              apiId.map((data, index) => <SingleTextPage key={index} apiId = {data} /> )
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePage;
