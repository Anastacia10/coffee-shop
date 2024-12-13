import AdvantageCard from "components/advantage-card/advantage-card";
import { advantages } from "./helper";
import styles from "./advantages.module.scss";

const Advantages = async () => {
  return (
    <section className={styles.advantages}>
      {advantages.map(({ src, text, alt }, index) => (
        <AdvantageCard
          key={alt}
          src={src}
          alt={alt}
          text={text}
          index={index}
        />
      ))}
    </section>
  );
};

export default Advantages;
