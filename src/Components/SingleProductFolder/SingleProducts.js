import { useParams } from "react-router-dom";
import PageNavigation from "./PageNavigation";
import "./SingleProducts.css";
import SinglePage from "./SinglePage";
import axios from "axios";
import { useEffect, useState } from "react";

const SingleProducts = () => {
  const [apiId, setApiId] = useState([]);
  const { id } = useParams();
  const apiIdCalling = async () => {
    const { data } = await axios.get(`https://api.pujakaitem.com/api/products?id=${id}`)
    setApiId((prev) => [data]);
  };

  useEffect(() => {
    apiIdCalling();

    // eslint-disable-next-line
  }, []);

  const ImgBox = apiId.map(items => items.image);

  return (
    <>
      <PageNavigation titleData = {apiId} />
      <SinglePage images = {ImgBox}  />
    </>
  )
};

export default SingleProducts;