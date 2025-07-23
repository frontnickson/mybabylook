import React from 'react';

import styles from './Sidebar.module.scss'

import { categoriesList } from '../../../data/list/categoriesList';

const Sidebar: React.FC = () => {

  return (
    <div className={styles.container}>

      {categoriesList.map(element => (

        <ul key={element.id}>
          <li>
            <p>{element.title}</p>
          </li>
        </ul>

      ))}

    </div>
  );
};

export default Sidebar;
