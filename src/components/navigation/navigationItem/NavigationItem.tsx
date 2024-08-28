import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";
import NavigationItemProps from "../../../types/navigationItemProps";

function NavigationItem({ name, path }: NavigationItemProps) {
  return (
    <li className={classes.navItem}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${classes.navItem__link} ${classes["navItem__link--active"]}`
            : classes.navItem__link
        }
        to={path}
      >
        {name}
      </NavLink>
    </li>
  );
}

export default NavigationItem;
