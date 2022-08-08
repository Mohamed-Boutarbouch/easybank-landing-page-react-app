import { featuresData } from '../data/data';
import styles from './Features.module.scss';

const Features = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial hub.<br /> Control your
          finances like never before.
        </p>
      </div>

      <div className={styles['grid-container']}>
        {featuresData.map((feature) => {
          const { id, icon, title, body } = feature;
          return (
            <article key={id} className={styles.wrapper}>
              <img src={icon} alt="/" className={styles.icon} />
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.text}>{body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
