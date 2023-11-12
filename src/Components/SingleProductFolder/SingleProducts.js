import { useParams } from "react-router-dom";
import PageNavigation from "./PageNavigation";
import "./SingleProducts.css";
import SinglePage from "./SinglePage";
// import axios from "axios";
import { useEffect, useState } from "react";
import ApiDataId from "../ApiFolder/ApiDataId";

const SingleProducts = () => {
  const [apiId, setApiId] = useState([]);
  const { id } = useParams();
  console.log(id);
  const apiIdCalling = async () => {
    // const { data } = await axios.get(`https://api.pujakaitem.com/api/products?id=${id}`)
    const data = ApiDataId.filter((items) => items.id === id);
    setApiId(data);
  };

  console.log(apiId);

  useEffect(() => {
    apiIdCalling();

    // eslint-disable-next-line
  }, []);

  const ImgBox = apiId.map(items => items.images);

  return (
    <>
      <PageNavigation titleData = {apiId} />
      <SinglePage images = {ImgBox} apiId = {apiId}  />
    </>
  )
};

export default SingleProducts;