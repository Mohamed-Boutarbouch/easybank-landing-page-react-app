// import { useState } from 'react';
import styles from './Navbar.module.scss';
import Logo from '../assets/logo.svg';
import ListIcon from '../assets/icon-hamburger.svg';
import CloseIcon from '../assets/icon-close.svg';
import { navLinks } from '../data/data';
import { useState } from 'react';
import Modal from './Modal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  return (
    <nav className={styles.container}>
      <img src={Logo} alt="" />
      <div className={styles['link-wrapper']}>
        <ul className={styles['link-list']}>
          {navLinks.map((link, index) => {
            return (
              <li key={index} className={styles.links}>
                <a href="/" className={styles.link}>
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <button className={styles.button}>request invite</button>

      {isOpen ? (
        <img
          src={CloseIcon}
          alt="icon"
          className={styles.icon}
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <img src={ListIcon} alt="icon" className={styles.icon} onClick={() => setIsOpen(!isOpen)} />
      )}

      {isOpen && (
        <Modal onClose={onClose}>
          <div className={styles.modal}>
            <ul className={styles['link-list-mobile']}>
              {navLinks.map((link, index) => {
                return (
                  <li key={index} className={styles['links-mobile']}>
                    <a href="/" className={styles['link-mobile']}>
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </Modal>
      )}
    </nav>
  );
};

export default Navbar;
