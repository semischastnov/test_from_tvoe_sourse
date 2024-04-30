import React from 'react';
import toViewGrey from '../../assets/image/toViewGrey.svg'
import toViewWhite from '../../assets/image/toViewWhite.svg'
import s from '../../App.module.css'
import useIsMobile from "../../utils/isMobil";
import useHoverEffect from "../../utils/HoverEffect";

const ButtonToViewMovieCard = () => {
    const isMobile = useIsMobile();
    const {hovered, handleMouseOver, handleMouseOut} = useHoverEffect();

    return (
        <button
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className={isMobile
                ? s.buttonsToViewLikeSendInPlay
                : s.buttonsToViewLikeSend}
        >
            {hovered
                ? <img
                    src={toViewWhite}
                    alt="image1"
                    className={isMobile
                        ? s.imgSmall
                        : null}/>
                : <img
                    src={toViewGrey}
                    alt="image2"
                    className={isMobile
                        ? s.imgSmall
                        : null}/>}
        </button>
    );
}

export default ButtonToViewMovieCard;