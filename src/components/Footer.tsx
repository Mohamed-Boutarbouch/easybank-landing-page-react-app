import styles from './Footer.module.scss';
import ButtonCTA from './ButtonCTA';
import FooterSocialLinks from './FooterSocialLinks';
import { footerLinks } from '../data/data';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterSocialLinks />
      <div className={styles.links}>
        <ul>
          {footerLinks.slice(0, 3).map((link, index) => {
            return (
              <li key={index}>
                <a href="/" className={styles.link}>
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
        <ul>
          {footerLinks.slice(3, 6).map((link, index) => {
            return (
              <li key={index}>
                <a href="/" className={styles.link}>
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.copyright}>
        <ButtonCTA />
        <p>&copy; Easybank. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
