import { FC } from "react";
import styles from "./Header.module.scss";
import linkText from "../../data/linkText.tsx";
import { Link, NavLink } from "react-router-dom";
import logo from '../../img/logo.png';


const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className="container">			
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <Link to="/my-site/home"><img src={logo} alt="Logo" /></Link>
          </div>
          <div className={styles.headerNav}>
						{linkText.map((text, i) => (
							<NavLink
								className="header__menu"
								to={text.slug}
								key={i}
							>
								{text.page}
							</NavLink>
						))}
					</div>
        </div>
      </div>
    </div>
  );
};

export default Header;