import React from 'react';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

import headerNotification from '../../images/header/headerNotification.svg'
import profileIcon from '../../images/profile/profile-icon.svg'

import styles from './Header.module.scss'

const list = [
  {id: 1, title: "Мои посты", link: "/my-posts"},
  {id: 2, title: "Мои подписки", link: "/my-subscriptions"},
]

const Header: React.FC = () => {
  return (
    <header className={styles.wrapper}>

      <div className={styles.container}>

        {/* Logo */}
        <Link to="/home">
          <img src={logo} alt='logo' />
        </Link>

        {/* Navigation */}
        <div className={styles.navigation}>

          {/* Navigation menu */}
          {list.map((element) => (
            <ul key={element.id}>
              <li>
                <p>{element.title}</p>
              </li>
            </ul>
          ))}

          {/* Notification */}
          <div className={styles.notification}>
            <img className={styles.notification_icon} src={headerNotification} alt="header-notification"/>
            <div className={styles.notification_circle}></div>
          </div>

          {/* Button to profile/authorization */}
          <Link to="/authorization">
            <button className='button' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap:'5px'}}>
              <p>Профиль</p>
              <img src={profileIcon} alt="profile-icon"/>
            </button>
          </Link>

          {/* burger menu */}
          <div className={styles.burger}>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 0C1.23478 0 0.98043 0.105357 0.792893 0.292893C0.605357 0.48043 0.5 0.734784 0.5 1C0.5 1.26522 0.605357 1.51957 0.792893 1.70711C0.98043 1.89464 1.23478 2 1.5 2H18.5C18.7652 2 19.0196 1.89464 19.2071 1.70711C19.3946 1.51957 19.5 1.26522 19.5 1C19.5 0.734784 19.3946 0.48043 19.2071 0.292893C19.0196 0.105357 18.7652 0 18.5 0H1.5ZM0.5 7C0.5 6.73478 0.605357 6.48043 0.792893 6.29289C0.98043 6.10536 1.23478 6 1.5 6H18.5C18.7652 6 19.0196 6.10536 19.2071 6.29289C19.3946 6.48043 19.5 6.73478 19.5 7C19.5 7.26522 19.3946 7.51957 19.2071 7.70711C19.0196 7.89464 18.7652 8 18.5 8H1.5C1.23478 8 0.98043 7.89464 0.792893 7.70711C0.605357 7.51957 0.5 7.26522 0.5 7ZM0.5 13.001C0.5 12.7358 0.605357 12.4814 0.792893 12.2939C0.98043 12.1064 1.23478 12.001 1.5 12.001H18.5C18.7652 12.001 19.0196 12.1064 19.2071 12.2939C19.3946 12.4814 19.5 12.7358 19.5 13.001C19.5 13.2662 19.3946 13.5206 19.2071 13.7081C19.0196 13.8956 18.7652 14.001 18.5 14.001H1.5C1.23478 14.001 0.98043 13.8956 0.792893 13.7081C0.605357 13.5206 0.5 13.2662 0.5 13.001Z" fill="black" />
            </svg>
          </div>

        </div>

      </div>

    </header>
  );
};

export default Header
