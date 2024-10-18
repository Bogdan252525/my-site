import { FC } from 'react';
import styles from './About.module.scss';
import autor from '../../img/me.png';
import { hardSkills, softSkills } from '../../data/skills';

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
          <div className={styles.aboutBlock}>
            <h2 className={styles.textTitle}>A little bit about myself</h2>
            <p className={styles.text}>
              Hello. My full name is Bogdan Rud. Although I am a Full-stack
              Developer, I have more experience in Front-end Development than in
              Back-end.
            </p>
          </div>
          <div className={styles.aboutBlock}>
            <h2 className={styles.textTitle}>Experience</h2>
            <ul className={styles.text}>
              <li>
                <b>Dec 2022 - Apr 2024: </b>Worked on various small IT projects.
              </li>
              <li>
                <b>Mar 2024 - Present: </b>
                Frontend Developer for the Team Challenge project.
              </li>
            </ul>
          </div>
          <div className={styles.aboutBlock}>
            <h2 className={styles.textTitle}>Education</h2>
            <ul className={styles.text}>
              <li>
                <b>Vinnitsa College of Culture and Arts, Vinnitsa, Ukraine </b>
                (2002 - 2006)
              </li>
              <li>
                <b>Vinnitsa State Pedagogical University, Vinnitsa, Ukraine </b>
                (2006 - 2008)
              </li>
              <li>
                <b>Various Courses in Front-end Development </b>
                (2022 - 2024)
              </li>
              <li>
                <b>Various Courses in Full-steck Development </b>
                (2024 - Present)
              </li>
            </ul>
          </div>
          <div className={styles.aboutBlock}>
            <h2 className={styles.textTitle}>Certificates</h2>
            <ul className={styles.text}>
              <li>
                <a
                  href="https://www.freecodecamp.org/certification/fcc26f6e320-d4e0-478d-bffa-c96b040cec9f/responsive-web-design"
                  target="_blank"
                >
                  Responsive Web Design - freeCodeCamp
                </a>
              </li>
              <li>
                <a
                  href="https://certificates.epam.com/certificates/359a2281-e399-4c06-9655-db4c2268581e"
                  target="_blank"
                >
                  Frontend Development Certificate - EPAM
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
