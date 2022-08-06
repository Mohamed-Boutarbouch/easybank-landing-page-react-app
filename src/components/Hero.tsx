import ButtonCTA from './ButtonCTA';
import heroIllustration from '../assets/image-mockups.png';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Next generation digital banking</h1>
        <p className={styles.paragraph}>
          Take your financial life online. Your Easybank account will be a one-stop-shop for
          spending, saving, budgeting, investing, and much more.
        </p>
        <ButtonCTA />
      </div>
      <div className={styles.background}>
        <img src={heroIllustration} alt="/" className={styles['hero-illustration']} />
      </div>
    </section>
  );
};

export default Hero;
