import React from 'react';
import AppRoutes from '../AppRoutes/AppRoutes';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './App.module.scss'
import Header from './Header/Header';
import Footer from './Footer/Footer';

const App: React.FC = () => {
  return (
    <div className={styles.container}>

      <Header />

      <main className={styles.main}>
        <Sidebar />
        <AppRoutes />
      </main>

      <Footer />

    </div>
  );
};

export default App;
