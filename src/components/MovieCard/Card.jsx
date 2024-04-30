import React from "react";
import {Carousel} from "react-responsive-carousel";

const Card = ({renderSlides}) => {
    return (
        <div>
            <Carousel
                infiniteLoop
                centerMode
                centerSlidePercentage={100}
                showThumbs={false}
                showArrows={true}
                showStatus={false}
                emulateTouch={true}>
                {renderSlides()}
            </Carousel>
        </div>
    )
}


export default Card;
