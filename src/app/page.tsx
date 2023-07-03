import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={`${styles.home} container`}>
      <div className={styles.desc}>
        <h1>Sersia</h1>
        <p>My Grandfather Ate Some Fruits</p>
      </div>

      <img
        className={styles.cats}
        src="/cats.png"
        alt="Cats"
        height={600}
        width={280}
      />
      <img
        width={280}
        height={300}
        className={styles.love}
        src="/love.png"
        alt="Love"
      />
      <img
        width={280}
        height={300}
        className={styles.blanket}
        src="/blanket.png"
        alt="Blanket"
      />
      <img
        width={280}
        height={300}
        className={styles.progulka}
        src="/Progulka.png"
        alt="Progulka"
      />
      <img
        className={styles.pivo}
        src="/pivo.png"
        alt="Pivo"
        height={600}
        width={280}
      />
    </div>
  );
}
