import React from "react";
import s from '../../App.module.css'
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Movies = ({renderSlides, parameter}) => {

    return (
        <div className={s.container2}>
            <h3>Новинки</h3>
           <Carousel
                            infiniteLoop
                            centerMode
                            centerSlidePercentage={parameter}
                            showThumbs={false}
                            showArrows={true}
                            showStatus={false}
                            emulateTouch={true}>
                    {renderSlides()}
           </Carousel>
        </div>
    )
}
export default Movies;