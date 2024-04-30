import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../../App.module.css';

const BackButton = () => {
    return (
        <NavLink to="/" className={s.backButton}>
            &lt; Назад
        </NavLink>
    );
};

export default BackButton;