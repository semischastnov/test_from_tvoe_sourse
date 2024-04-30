import React from 'react';
import sendGrey from '../../assets/image/sendGrey.svg'
import sendWhite from '../../assets/image/sendWhite.svg'
import s from '../../App.module.css'
import useIsMobile from "../../utils/isMobil";
import useHoverEffect from "../../utils/HoverEffect";

const ButtonSendCard = () => {
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
                        src={sendWhite}
                        alt="image1"
                        className={isMobile
                            ? s.imgSmall
                            : null}/>
                    : <img
                        src={sendGrey}
                        alt="image2"
                        className={isMobile
                            ? s.imgSmall
                            : null}/>}
            </button>
    );
}

export default ButtonSendCard;