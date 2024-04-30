import React from 'react';
import s from '../../App.module.css'
import useIsMobile from "../../utils/isMobil";
import useHoverEffect from "../../utils/HoverEffect";
import logoPromo1 from '../../assets/image/logoPromo1.svg'

const ButtonPromoCodeFooter = () => {
    const isMobile = useIsMobile();
    const {handleMouseOver, handleMouseOut } = useHoverEffect();

    return (
        <button onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className={isMobile ? s.btnSupportFooterBlock : s.btnSupportFooterFlex}>
            <img src={logoPromo1} alt='logoPromo1'/> Ввести промокод
        </button>
    );
}

export default ButtonPromoCodeFooter;