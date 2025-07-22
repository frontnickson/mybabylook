import React from 'react';

import profileImage from '../../images/profile/profile-image.png'
import image from '../../images/clotch/child-test.png'
import styles from './PostComponent.module.scss'

const PostComponent: React.FC = () => {
  return (
    <div className={styles.container}>


      <div className={styles.title}>
        <img src={profileImage} alt='profile-image' style={{ width: "50px", height: "50px" }} />

        <div className={styles.title_name}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Алена Лебедева</h3>
            <p>15 м</p>
          </div>
          <p>г.Москва</p>
        </div>

      </div>

      <div className={styles.topic}>
        <h3>Замечательный образ на осень</h3>
        <p>Нашла в магазине отдельную прекрасную вещь на своего ребенка, эта вещь отлично сочетается с кофточкой. Нашла в магазине отдельную прекрасную вещь на своего ребенка, эта вещь отлично сочетается с кофточкой</p>
      </div>

      <div className={styles.image}>
        <img src={image} alt='image' style={{ width: "100%", height: "100%" }} />
      </div>

      <div className={styles.action}>

        <div className={styles.action_icon}>
          <div className={styles.action_iconSection}>
            <svg width="20" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 1C3.4625 1 1 3.4625 1 6.5C1 12 7.5 17 11 18.163C14.5 17 21 12 21 6.5C21 3.4625 18.5375 1 15.5 1C13.64 1 11.995 1.9235 11 3.337C10.4928 2.61469 9.81897 2.0252 9.03568 1.61841C8.25238 1.21162 7.38263 0.999502 6.5 1Z" stroke="black"/>
            </svg>
            <p>13</p>
          </div>

          <div className={styles.action_iconSection}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 19C11.78 19 13.5201 18.4722 15.0001 17.4832C16.4802 16.4943 17.6337 15.0887 18.3149 13.4442C18.9961 11.7996 19.1743 9.99002 18.8271 8.24419C18.4798 6.49836 17.6226 4.89472 16.364 3.63604C15.1053 2.37737 13.5016 1.5202 11.7558 1.17294C10.01 0.82567 8.20038 1.0039 6.55585 1.68509C4.91131 2.36628 3.50571 3.51983 2.51677 4.99987C1.52784 6.47991 1 8.21997 1 10C1 11.488 1.36 12.891 2 14.127L1 19L5.873 18C7.109 18.64 8.513 19 10 19Z" stroke="black"/>
            </svg>
            <p>5</p>
          </div>
        </div>

        <button className='button-mini'>Посмотреть пост</button>
      </div>

    </div>
  );
};

export default PostComponent;