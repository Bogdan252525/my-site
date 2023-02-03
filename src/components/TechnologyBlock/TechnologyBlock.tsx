import { FC } from "react";
import TechnologyItem from "../TechnologyItem/TechnologyItem";
import technologies from "../../data/technologies";
import styles from "./TechnologyBlock.module.scss";

const TechnologyBlock: FC = () => {
  return (
    <div className={styles.technologySection}>
      <div className="container">
        <h2 className={styles.technologyTitle}>technologies:</h2>
        <div className={styles.technologyBlock}>
          {technologies.map((technology) => {
            return (
              <TechnologyItem
                key={technology.name}
                {...technology}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnologyBlock;
