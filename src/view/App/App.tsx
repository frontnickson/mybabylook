import React from 'react';
import AppRoutes from '../AppRoutes/AppRoutes';
import Sidebar from '../components/Sidebar/Sidebar';

import styles from './App.module.scss'
import Header from './Header/Header';

const App: React.FC = () => {
  return (
    <div className={styles.container}>

      <Header/>

      <main className={styles.main}>
        <Sidebar/>
        <AppRoutes/>
      </main>

    </div>
  );
};

export default App;