import React from 'react';
import logoPromo1 from '../../assets/image/logoPromo1.svg'
import logoPromo2 from '../../assets/image/logoPromo2.svg'
import s from '../../App.module.css'
import useIsMobile from "../../utils/isMobil";
import useHoverEffect from "../../utils/HoverEffect";

const ButtonPromoCodeHeader = () => {
    const isMobile = useIsMobile();
    const { hovered, handleMouseOver, handleMouseOut } = useHoverEffect();

    return (
        isMobile
            ? <button
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className={s.buttonPromoCodeHeader}
            >
                {hovered
                    ? <img src={logoPromo1} alt="image1" />
                    : <img src={logoPromo2} alt="image2" />}
            </button>
            : <button
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className={s.btnPromoText}
            >
                Промокод
            </button>
    );
}

export default ButtonPromoCodeHeader;