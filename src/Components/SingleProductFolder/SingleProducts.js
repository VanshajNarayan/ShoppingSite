import { useParams } from "react-router-dom";
import PageNavigation from "./PageNavigation";
import "./SingleProducts.css";
import SinglePage from "./SinglePage";
import { useEffect, useState } from "react";
import ApiDataId from "../ApiFolder/ApiDataId";

const SingleProducts = () => {
  const [apiId, setApiId] = useState([]);
  const { id } = useParams();
  const apiIdCalling = async () => {
    const data = ApiDataId.filter((items) => items.id === id);
    setApiId(data);
  };

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