import { FC } from "react";
import socialItemsContact from '../../data/socialItemsContact'
import styles from "./Contact.module.scss";

const Contact: FC = () => {
  return (
    <div className={styles.contactSection}>
      <div className="container">
				<h1 className={styles.name}>Bohdan Rud</h1>
        <ul className={styles.address}>
          <li>
            <a href="mailto:bogdan2516@gmail.com">mail: bogdan2516@gmail.com</a>
          </li>
          <li>
            <a href="tel:+380631352388">tel: +380-63-135-23-88</a>
          </li>
          <li>
            <a
              href="https://goo.gl/maps/v7NVCqhSBKGnKDUh9"
              target="_blank"
              rel="noopener noreferrer"
            >
              address: Ukraine, Murovanyye Kurilovtsy, Street Heroes of the Maidan, home
              34, part. 16
            </a>
          </li>
        </ul>
				<div className={styles.contactIcons}>
            {socialItemsContact.map((socialItemContact, i) => {
              return (
                <a
                  target="_blank"
									rel="noreferrer"
                  href={socialItemContact.page}
                  key={i}
                >
                  <img
                    src={socialItemContact.image}
                    alt={socialItemContact.description}
                  />
                </a>
              );
            })}
          </div>
      </div>
    </div>
  );
};

export default Contact;
