import React from "react";
import s from '../../App.module.css'
import ButtonToViewMovieCard from "../Buttons/ButtonToViewMovieCard";
import ButtonLikeCard from "../Buttons/ButtonLikeCard";
import ButtonSendCard from "../Buttons/ButtonSendCard";
import ButtonToPlayMovie from "./ButtonToPlayMovie";
import {Carousel} from "react-responsive-carousel";


const Play = ({renderMovie, isMobile}) => {

    return (
        <div>
            {/*<Carousel className={s.carouselContainer}*/}
            <Carousel
                infiniteLoop
                centerMode
                centerSlidePercentage={100}
                showThumbs={false}
                showArrows={true}
                showStatus={false}
                emulateTouch={true}>
                {renderMovie()}
            </Carousel>
            <div className={isMobile ? s.blockButtonsCardBlock : s.blockButtonsCardFlex}>
                <>
                    <ButtonToPlayMovie/>
                    <div className={isMobile ? s.btnButtonsPlay : null}>
                        <ButtonToViewMovieCard/>
                        <ButtonLikeCard/>
                        <ButtonSendCard/>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Play;
