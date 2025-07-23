import React from 'react';

import { footerList_1, footerList_2 } from '../../../data/list/footerList';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
      <footer className={styles.container}>

        <div className={styles.list}>
          {footerList_1.map(element => (
            <ul key={element.id}>
              <li>
                <p>{element.title}</p>
              </li>
            </ul>
          ))}
        </div>

        <div className={styles.list}>
          {footerList_2.map(element => (
            <ul key={element.id}>
              <li>
                <p>{element.title}</p>
              </li>
            </ul>
          ))}
        </div>

      </footer>
  );
};

export default Footer;
