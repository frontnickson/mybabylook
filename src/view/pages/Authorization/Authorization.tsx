import React from 'react';

import styles from './Authorization.module.scss'

const b: React.FC = () => {
  return (
    <div className={styles.container}>

      <div className={styles.title}>
        <h3>ВХОД</h3>
        <h3>РЕГИСТРАЦИЯ</h3>
      </div>

      <form>

        <input type='text' placeholder='Имя...' />
        <input type='text' placeholder='Фамилия...' />
        <input type='email' placeholder='E-mail...' />
        <input type='password' placeholder='Пароль...' />

        <button>Регистрация</button>

      </form>

      <p>Забыли пароль?</p>

      <button>Продолжить с Google</button>

    </div>
  );
};

export default Authorization;