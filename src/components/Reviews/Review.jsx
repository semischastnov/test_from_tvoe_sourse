import s from '../../App.module.css'
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import arrowToRight from '../../assets/image/arrowToRight.svg'


const Review = (props) => {
    return (
        <div className={s.containerReviews}>
            <h2>Рейтинг TVOЁ 8.4 </h2>
            <button className={s.goToReviews}>
                <span>Отзывы</span>
                <img src={arrowToRight} alt='arrowToRight'/>
            </button>

            <div className={s.margin}>
                <Carousel className={s.carousel}
                    // infiniteLoop
                          centerMode={true}
                          centerSlidePercentage={props.parameter}
                          showThumbs={false}
                          showArrows={true}
                          showStatus={false}
                          emulateTouch={true}>
                    {props.renderSlides()}
                </Carousel>
            </div>
        </div>
    )
}
export default Review;