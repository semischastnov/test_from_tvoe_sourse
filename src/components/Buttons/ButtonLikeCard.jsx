import React from 'react';
import likeGrey from '../../assets/image/likeGrey.svg'
import likeWhite from '../../assets/image/likeWhite.svg'
import s from '../../App.module.css'
import useIsMobile from "../../utils/isMobil";
import useHoverEffect from "../../utils/HoverEffect";

const ButtonLikeCard = () => {
    const isMobile = useIsMobile();
    const { hovered, handleMouseOver, handleMouseOut } = useHoverEffect();

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
                        src={likeWhite}
                        alt="image1"
                        className={isMobile
                            ? s.imgSmall
                            : null}/>
                    : <img
                        src={likeGrey}
                        alt="image2"
                        className={isMobile
                            ? s.imgSmall
                            : null}/>}
            </button>
    );
}

export default ButtonLikeCard;