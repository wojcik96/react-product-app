import { Link } from "react-router-dom";

import classes from "./ProductItem.module.css";
import Product from "../../../types/product";

function ProductItem({ id, image, title, price }: Product) {
  return (
    <li className={classes.product}>
      <Link className={classes.product__link} to={`/products/${id}`}>
        <div className={classes.product__imageBox}>
          <img className={classes.product__image} src={image} alt="" />
        </div>
        <div className={classes.product__content}>
          <h2 className={classes.product__title}>{title}</h2>
          <p className={classes.product__price}>{price} PLN</p>
        </div>
      </Link>
    </li>
  );
}

export default ProductItem;
