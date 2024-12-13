import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {`No-name © ${new Date().getFullYear()}. All rights reserved.`}
    </footer>
  );
};

export default Footer;
