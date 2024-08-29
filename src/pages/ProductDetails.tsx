import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import { fetchProductDetails } from "../api/productsApi";
import SectionWrapper from "../components/sectionWrapper/SectionWrapper";
import StatusMessage from "../components/statusMessage/StatusMessage";
import classes from "./ProductDetails.module.css";
import useLastViewedProduct from "../hooks/useLastViewedProduct";

function ProductDetails() {
  const { setLastViewedProduct } = useLastViewedProduct();
  const { id } = useParams<{ id: string }>();
  const { isFetching, fetchedData: product, error} = useFetch(() => fetchProductDetails(id));

  useEffect(() => {
    if(id && product){
      setLastViewedProduct(id);
    }
  }, [product]);
 
  if (!id || isFetching || !product || error ) {
    return (
      <StatusMessage isLoading={isFetching} error={error} noData={!product} noId={!id}/>
    );
  }

  const { title, image, price, description, category, rating } = product;

  return (
    <SectionWrapper title={title}>
      <>
        <img
          className={classes.productDetails__image}
          src={image}
          alt={title}
        />
        <p className={classes.productDetails__price}>Price: {price} PLN</p>
        <p className={classes.productDetails__description}>
          Description: {description}
        </p>
        <p className={classes.productDetails__category}>Category: {category}</p>
        <p className={classes.productDetails__rating}>
          Rating: {rating?.rate} ({rating?.count} votes)
        </p>
      </>
    </SectionWrapper>
  );
}

export default ProductDetails;
