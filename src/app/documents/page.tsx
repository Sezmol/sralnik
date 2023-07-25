import Image from 'next/image';
import styles from './styles.module.scss';

const Documents = () => {
  return (
    <div className={styles.documents}>
      <h1 className={styles.title}>Documents</h1>
      <div className={styles.images}>
        <Image
          className={styles.brak}
          src="/brak.png"
          alt="brak"
          height={700}
          width={600}
        />
      </div>
    </div>
  );
};

export default Documents;
