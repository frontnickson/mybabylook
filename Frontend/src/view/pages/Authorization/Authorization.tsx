import React from 'react';
import FormAuthorization from './FormAuthorization';


import styles from './Authorization.module.scss'

const Authorization: React.FC = () => {

  return (
    <div className={styles.container}>

      <div>
        <h3>Регистрация</h3>
        <h3>Авторизация</h3>
      </div>

      <FormAuthorization />

    </div>
  );
};

export default Authorization;
