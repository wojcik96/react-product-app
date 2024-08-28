import classes from "./Navigation.module.css";
import NavigationItemProps from "../../types/navigationItemProps";
import NavigationItem from "./navigationItem/NavigationItem";

function Navigation() {
  const config: NavigationItemProps[] = [
    { name: "Home", path: "" },
    { name: "Product", path: "/products" },
  ];

  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        {config.map((navItem) => (
          <NavigationItem key={navItem.name} name={navItem.name} path={navItem.path} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
