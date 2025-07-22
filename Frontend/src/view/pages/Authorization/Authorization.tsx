import React from 'react';
import styles from './Authorization.module.scss'
import FormAuthorization from './FormAuthorization';

const Authorization: React.FC = () => {

  return (
    <div className={styles.container}>
      <FormAuthorization />
    </div>
  );
};

export default Authorization;
