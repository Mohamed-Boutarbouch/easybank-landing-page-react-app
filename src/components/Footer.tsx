import styles from './Footer.module.scss';
import ButtonCTA from './ButtonCTA';
import FooterSocialLinks from './FooterSocialLinks';
import { footerLinks } from '../data/data';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <FooterSocialLinks />
        <div className={styles['link-wrapper']}>
          {footerLinks.slice(0, 3).map((link, index) => {
            return (
              <a key={index} href="/" className={styles.link}>
                {link}
              </a>
            );
          })}
          {footerLinks.slice(3, 6).map((link, index) => {
            return (
              <a key={index} href="/" className={styles.link}>
                {link}
              </a>
            );
          })}
        </div>
      </div>
      <div className={styles['right-side']}>
        <ButtonCTA />
        <p className={styles.copyright}>&copy; easybank. all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
