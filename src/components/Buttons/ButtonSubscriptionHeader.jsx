import React from 'react';
import s from '../../App.module.css'
import useIsMobile from "../../utils/isMobil";
import useHoverEffect from "../../utils/HoverEffect";

const ButtonSubscriptionHeader = () => {
    const isMobile = useIsMobile();
    const {handleMouseOver, handleMouseOut } = useHoverEffect();

    return isMobile ? null : (
        <button
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className={s.btnSubscription}
        >
            7 дней за 0 ₽
        </button>
    );
}

export default ButtonSubscriptionHeader;