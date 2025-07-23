import React from 'react';
import PostComponent from '../../components/PostComponent/PostComponent';

import ServicesComponent from '../../components/ServicesComponent/ServicesComponent';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <PostComponent/>
      <ServicesComponent/>
    </div>
  );
};

export default Home;
