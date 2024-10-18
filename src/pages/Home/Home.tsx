import { Link } from 'react-router-dom';
import { FC } from 'react';
import TechnologyBlock from '../../components/TechnologyBlock/TechnologyBlock';
import code from '../../img/code.png';
import styles from './Home.module.scss';

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
              I am a Full-stack Developer with a background in piano performance
              ). Before transitioning into the tech industry, I worked on cruise
              ships, but I have always been passionate about technology. Along
              with completing several Full-stack Development courses, I have
              gained practical experience in the field. Currently, I am honing
              my skills and seeking a position as a Front-end or Back-end
              Developer. I am open to relocation and remote work opportunities. More information in the <Link to="/about">about</Link> menu and examples of some works in the <Link to="/work">work</Link> menu.
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
