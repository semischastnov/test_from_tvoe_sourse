import React from 'react';
import logoSearch1 from '../../assets/image/logoSearch1.svg'
import logoSearch2 from '../../assets/image/logoSearch2.svg'
import s from '../../App.module.css'
import useHoverEffect from "../../utils/HoverEffect";

const ButtonSearchCodeHeader = () => {
    const { hovered, handleMouseOver, handleMouseOut } = useHoverEffect();

    return (
        <button
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className={s.buttonSearchHeader}
        >
            {hovered
                ? <img src={logoSearch1} alt="image1" />
                : <img src={logoSearch2} alt="image2" />}
        </button>
    );
}

export default ButtonSearchCodeHeader;