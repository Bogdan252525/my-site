import { FC } from "react";
import styles from "./About.module.scss";
import autor from "../../img/me.png";
import { hardSkills, softSkills } from "../../data/skills";

const About: FC = () => {
  return (
    <div>
      <div className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutInner}>
            <div>
              <h2 className={styles.aboutTitle}>Hard skills</h2>
              <ul className={styles.hardSkills}>
                {hardSkills.map((hardSkill, ind) => {
                  return <li key={ind}>{hardSkill}</li>;
                })}
              </ul>
            </div>
            <img
              className={styles.aboutFoto}
              src={autor}
              alt="Autor"
            />
            <div>
              <h2 className={styles.aboutTitle}>Soft skills</h2>
              <ul className={styles.softSkills}>
                {softSkills.map((softSkill, ind) => {
                  return <li key={ind}>{softSkill}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutText}>
        <div className="container">
					<h2 className={styles.textTitle}>A little bit about myself</h2>
          <p className={styles.text}>
						Hello. My name is Bogdan Rud. I am a frontend developer. I don't have a technical background. I have a pianist education. Worked on cruise ships. I have always liked computer technology, so I decided to devote myself to this. To date, I have taken several different courses, and at the moment I am practicing and looking for a job for a position junior frontend developer. Ready to consider different offers.
					</p>
        </div>
      </div>
    </div>
  );
};

export default About;
