import { useState } from "react";
import "./SinglePage.css";

const SinglePage = ({ images }) => {
  const [imgArr] = images;
  const [selectImg, setSelectImg] = useState();
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
                  onClick={() => setSelectImg(img.url)}
                />
              ))}
            </div>
            <div className="clickimage_Section">
              <img
                // src="https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                src={selectImg}
                alt=""
                width="100%"
                className="clickImage"
              />
            </div>
          </div>
          <div className="textBox"></div>
        </div>
      </section>
    </>
  );
};

export default SinglePage;
