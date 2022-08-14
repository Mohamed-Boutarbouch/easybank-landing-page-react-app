import styles from './Articles.module.scss';
import { articlesData } from '../data/data';

const Articles = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>latest articles</h2>

      <div className={styles.wrapper}>
        {articlesData.map((article) => {
          const { id, image, author, title, body } = article;
          return (
            <article key={id} className={styles.card}>
              <div className={styles['image-container']}>
                <img src={image} alt="/" className={styles.image} />
              </div>
              <div className={styles['text-wrapper']}>
                <span className={styles.author}>by {author}</span>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles['body-text']}>{body}...</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Articles;
