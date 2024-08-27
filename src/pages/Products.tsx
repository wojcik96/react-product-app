import { Link } from "react-router-dom";
import classes from './Products.module.css'; 

function ProductsPage() {
  return (
    <div className={classes.productsPage}>
      <h1 className={classes.productsPage__title}>Products Page</h1>

      <section className={classes.productsPage__section}>
        <ul className={classes.productsPage__list}>
          <li className={classes.productsPage__item}>
            <Link className={classes.productsPage__link} to="/products/1">
              <img
                className={classes.productsPage__image}
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
              />
              <p className={classes.productsPage__description}>
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - 50.00 PLN
              </p>
            </Link>
          </li>
          <li className={classes.productsPage__item}>
            <Link className={classes.productsPage__link} to="/products/1">
              <img
                className={classes.productsPage__image}
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
              />
              <p className={classes.productsPage__description}>
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - 50.00 PLN
              </p>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ProductsPage;
