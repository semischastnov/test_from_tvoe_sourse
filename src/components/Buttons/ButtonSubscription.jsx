import React from 'react';
import s from '../../App.module.css'
import useHoverEffect from "../../utils/HoverEffect";

const ButtonSubscriptionHeader = () => {
    const {handleMouseOver, handleMouseOut } = useHoverEffect();

    return (
        <button
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className={s.btnSubscriptionBlock}
        >
            Смотреть 7 дней за 0 ₽
        </button>
    );
}

export default ButtonSubscriptionHeader;