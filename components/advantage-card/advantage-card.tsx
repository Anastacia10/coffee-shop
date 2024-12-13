import Image from "next/image";
import { IAdvantageCardProps } from "./type";
import styles from "./advantage-card.module.scss";

const AdvantageCard = ({ src, alt, text, index }: IAdvantageCardProps) => {
  return (
    <div className={styles.prosCard}>
      <h3 className={styles.cardHeader}>
        <p className={styles.index}>{index}</p>
        <p>{text}</p>
      </h3>
      <Image
        src={src}
        alt={alt}
        className={styles.image}
        width={100}
        height={100}
        priority
      />
    </div>
  );
};

export default AdvantageCard;
