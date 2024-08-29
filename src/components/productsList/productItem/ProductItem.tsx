import { Link } from "react-router-dom";

import classes from "./ProductItem.module.css";
import Product from "../../../types/product";

function ProductItem({ id, image, title, price }: Product) {
  return (
    <li className={classes.product}>
      <Link className={classes.product__link} to={`/products/${id}`}>
        <img className={classes.product__image} src={image} alt={title} />
        <p className={classes.product__desc}>
          {title} - {price}
        </p>
      </Link>
    </li>
  );
}

export default ProductItem;
