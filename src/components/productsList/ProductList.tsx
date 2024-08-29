import ProductItem from "./productItem/ProductItem";
import classes from "./ProductList.module.css";
import Product from "../../types/product";

function ProductList({ productsList }: { productsList?: Product[] }) {
  return (
    <ul className={classes.productsList}>
      {productsList?.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          image={product.image}
          price={product.price}
          title={product.title}
        />
      ))}
    </ul>
  );
}

export default ProductList;
