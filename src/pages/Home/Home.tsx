import { FC } from "react";
import TechnologyBlock from "../../components/TechnologyBlock/TechnologyBlock";
import code from "../../img/code.png";
import styles from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.hero}>
          <img
            className={styles.codeImg}
            src={code}
            alt="Code"
          />
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>coder:)</h1>
            <p className={styles.heroDescription}>
              Hello, my names is Bohdan. I am a frontend developer. Feel free
              to reach out to me any time. I prefer to talk over email,
              especially since we may be a few time zones away.
            </p>
            <a
              className={styles.emailLink}
              href="mailto:bogdan2516@gmail.com"
							target="_blank"
            >
              write me
            </a>
          </div>
        </div>
      </div>
      <TechnologyBlock />
    </div>
  );
};

export default Home;
