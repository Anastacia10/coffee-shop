import { joinClasses } from "utils/joinClasses";
import { NavLink } from "components/nav-link/nav-link";
import LogoIcon from "public/assets/icons/logo.svg";
import CartIcon from "public/assets/icons/cart.svg";
import MenuIcon from "public/assets/icons/menu.svg";
import PATHS from "constants/paths";
import styles from "./nav-bar.module.scss";

export const NavBar = () => {
  return (
    <header className={joinClasses(styles.navBar)}>
      <div className={styles.container}>
        <NavLink href={PATHS.HOME}>Home</NavLink>
        <NavLink href={PATHS.ABOUT}>About</NavLink>
        <NavLink href={PATHS.CONTACT}>Contact</NavLink>
      </div>
      <div>
        <LogoIcon className={styles.logo} />
      </div>
      <div className={styles.container}>
        <NavLink href={PATHS.MENU}>Menu</NavLink>
        <NavLink href={PATHS.CART}>
          <CartIcon />
        </NavLink>
        <MenuIcon />
      </div>
    </header>
  );
};
