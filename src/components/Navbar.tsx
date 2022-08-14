// import { useState } from 'react';
import styles from './Navbar.module.scss';
import Logo from '../assets/logo.svg';
import { navLinks } from '../data/data';
import ButtonCTA from './ButtonCTA';

const Navbar = () => {
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
      <ButtonCTA />
    </nav>
  );
};

export default Navbar;
