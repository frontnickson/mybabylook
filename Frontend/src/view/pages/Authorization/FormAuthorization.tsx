import React, { useState } from 'react';

import styles from './Authorization.module.scss';

const FormAuthorization: React.FC = () => {

    const [message, setMessage] = useState<string>('');

    const [name, setName] = useState<string>('');
    const [secondName, setSecondName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        if (name === '' || secondName === '' || email === '' || password === '') {
            setMessage('Пожалуйста, заполните все поля.');
            return;
        }

        if (!/^[A-Za-zА-Яа-яЁё]+$/.test(name)) {
            setMessage('Имя должно содержать только буквы')
            return;
        } else {
            setMessage('');
        }

        if (/[=+<>[\]{}()!@#$%^&*?,.]/.test(password)) {
            setMessage('Пароль не должен содержать специальные символы, только буквы и цифры');
            return
        } else {
            setMessage('');
        }

        if (/[=+<>[\]{}()!#$%^&*?,.]/.test(password)) {
            setMessage("Пароль не должен содержать лишние символы, только буквы и цифры");
        } else {
            setMessage('');
        }

    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>

            <input type='text' placeholder='Имя...' className='input' onChange={(e) => { setName(e.target.value) }} />
            <input type='text' placeholder='Фамилия...' className='input' onChange={(e) => { setSecondName(e.target.value) }} />
            <input type='email' placeholder='E-mail...' className='input' onChange={(e) => { setEmail(e.target.value) }} />
            <input type='password' placeholder='Пароль...' className='input' onChange={(e) => { setPassword(e.target.value) }} />

            <button className='button' type='submit'>Регистрация</button>

            <p style={{ color: "red" }}>{message}</p>

        </form>
    );
};

export default FormAuthorization;
