import React from 'react';

import styles from './Sidebar.module.scss'

const list = [
  {
    id: 1,
    title: "Для мальчиков",
    link: "/boy"
  },
  {
    id: 2,
    title: "Для девочек",
    link: "/girl"
  },
  {
    id: 3,
    title: "Тренды сезонов",
    link: "/trand"
  },
]

const Sidebar: React.FC = () => {
  return (
    <div className={styles.container}>
      {list.map(element => (
        <ul>
          <li key={element.id}>
            <p>{element.title}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Sidebar;