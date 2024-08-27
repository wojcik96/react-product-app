import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.navigation__list}>
        <li className={classes.navigation__item}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${classes.navigation__link} ${classes["navigation__link--active"]}`
                : classes.navigation__link
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={classes.navigation__item}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${classes.navigation__link} ${classes["navigation__link--active"]}`
                : classes.navigation__link
            }
            to="/products"
          >
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
