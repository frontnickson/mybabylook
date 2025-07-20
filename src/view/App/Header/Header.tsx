import React from 'react';
import logo from '../../images/logo.svg'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={styles.wrapper}>

      <div className={styles.container}>

        <Link to="/home">
          <img src={logo} alt='logo' />
        </Link>

        <Link to="/authorization">
          <button className='button'>Войти</button>
        </Link>

      </div>

    </header>
  );
};

export default Header