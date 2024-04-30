import React from 'react';
import s from '../../App.module.css'
import useIsMobile from "../../utils/isMobil";
import useHoverEffect from "../../utils/HoverEffect";

const ButtonToPlayMovie = () => {
    const isMobile = useIsMobile();
    const {handleMouseOver, handleMouseOut } = useHoverEffect();



    return (
            <button
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className={isMobile ? s.styleInfoMovieBlock : s.styleInfoMovieFlex}
            >
                Смотреть
            </button>
    );
}

export default ButtonToPlayMovie;