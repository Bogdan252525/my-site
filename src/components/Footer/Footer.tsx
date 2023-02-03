import { FC } from "react";
import styles from "./Footer.module.scss";
import socialItems from "../../data/socialItems";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <p className={styles.footerText}>&#169; 2023 Bohdan Rud</p>
          <div className={styles.footerIcons}>
            {socialItems.map((socialItem, i) => {
              return (
                <a
                  target="_blank"
									rel="noreferrer"
                  href={socialItem.page}
                  key={i}
                >
                  <img
                    src={socialItem.image}
                    alt={socialItem.description}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
