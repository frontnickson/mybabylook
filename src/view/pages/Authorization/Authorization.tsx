import React from 'react';

import styles from './Authorization.module.scss'

const Authorization: React.FC = () => {
  return (
    <div className={styles.container}>

      <div className={styles.title}>
        <h3>ВХОД</h3>
        <h3>РЕГИСТРАЦИЯ</h3>
      </div>

      <form className={styles.form}>

        <input type='text' placeholder='Имя...' className='input'/>
        <input type='text' placeholder='Фамилия...' className='input'/>
        <input type='email' placeholder='E-mail...' className='input'/>
        <input type='password' placeholder='Пароль...' className='input'/>

        <button className='button'>Регистрация</button>

      </form>

      <p>Забыли пароль?</p>

      <button className='button-mini'>Продолжить с Google</button>

    </div>
  );
};

export default Authorization;