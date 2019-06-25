import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        This app was designed by{' '}
        <a href="https://github.com/OlegGap" className={styles.name}>
          {' '}
          Oleh Hnapovskyi
        </a>{' '}
        in 2019
      </p>
    </footer>
  );
};

export default Footer;
