import s from '../../App.module.css'
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Top = ({renderSlides, parameter}) => {
    return (
        <div className={s.container2}>
            <h3>ТОП НЕДЕЛИ</h3>
            <div className={s.margin}>
                <Carousel className={s.carousel}
                    // infiniteLoop
                          centerMode
                          centerSlidePercentage={parameter}
                          showThumbs={false}
                          showArrows={true}
                          showStatus={false}
                          emulateTouch={true}>
                    {renderSlides()}
                </Carousel>
            </div>
        </div>
    )
}
export default Top;