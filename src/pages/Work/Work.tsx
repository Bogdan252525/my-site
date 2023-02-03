import { FC } from "react";
import styles from "./Work.module.scss";
import myWorks from "../../data/myWorks";

const Work: FC = () => {
  return (
    <div className={styles.workSection}>
      <div className="container">
        <h1 className={styles.workTitle}>my works</h1>
        <div className={styles.workItems}>
				{myWorks.map((work, i) => (
							<a
								className={styles.workItem}
								key={i}
								href={work.link}
								target="_blank"
							>
								<img className={styles.workImage} src={work.image} alt={work.description} />
								<p className={styles.workAbout}>{work.about}</p>
							</a>
						))}
				</div>
      </div>
    </div>
  );
};

export default Work;
