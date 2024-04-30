import React from 'react';
import s from '../../App.module.css'
import {NavLink} from "react-router-dom";
import useIsMobile from "../../utils/isMobil";
import useHoverEffect from "../../utils/HoverEffect";

const ButtonInfoMovieCard = () => {
    const isMobile = useIsMobile();
    const {handleMouseOver, handleMouseOut } = useHoverEffect();

    return isMobile ? null : (
            <NavLink
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className={s.styleInfoMovieCard}
                to='/movie'
            >
                Подробнее
            </NavLink>
    );
}

export default ButtonInfoMovieCard;