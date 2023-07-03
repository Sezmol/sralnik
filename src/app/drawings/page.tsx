import styles from './styles.module.scss';
import Image from 'next/image';

const Drawings = () => {
  return (
    <div className={styles.drawings}>
      <h1 className={styles.title}>Our Drawings</h1>
      <div className={styles.drawings_container}>
        <Image src="/draw1.png" alt="drawing" width={400} height={300} />
        <Image src="/draw2.png" alt="drawing" width={400} height={300} />
        <Image src="/draw3.png" alt="drawing" width={400} height={300} />
      </div>
    </div>
  );
};

export default Drawings;
