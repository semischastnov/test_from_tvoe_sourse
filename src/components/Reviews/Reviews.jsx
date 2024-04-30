import React, {useEffect, useState} from "react";
import s from '../../App.module.css'
import Review from "./Review";
import LinesEllipsis from "react-lines-ellipsis";
import useIsMobile from "../../utils/isMobil";


const Reviews = (sliderMovieCard) => {
    const isMobile = useIsMobile();
    const [showFullText, setShowFullText] = useState(false);

    useEffect(() => {
        setShowFullText(false);
    }, [sliderMovieCard.sliderMovieCard[0].reviews]);



    let parameter = isMobile ? '88' : '45';

    const renderSlides = () => {
        return sliderMovieCard.sliderMovieCard[0].reviews.map((index) => (
            <div key={index.userId} className={s.blockReview}>
                <span className={s.blockReviewName}>{index.user}</span>
                <span className={s.blockReviewData}>{index.data}</span>
                <span className={s.blockReviewRating}>{index.ratingUser}</span>
                <div className={s.blockReviewText}>
                    <LinesEllipsis
                        text={index.text}
                        maxLine={!showFullText ? 3 : 20}
                        ellipsis={
                            // !showFullText && index.text.replace(/\s/g, "").length > 10
                            // !showFullText && index.text.split("\n").length > 3
                            !showFullText && index.text.length
                                ? <span>
                                    ...
                                    <button className={s.btnReviewOpenClose} onClick={() => setShowFullText(true)}>
                                        Читать дальше
                                    </button>
                                </span>
                                : showFullText
                                    ? <span>
                                    <button className={s.btnReviewOpenClose} onClick={() => setShowFullText(false)}>
                                        Скрыть
                                    </button>
                                    </span>
                                    : null
                        }
                    /></div>


            </div>
        ))
    }

    return (
        <div>
            <Review renderSlides={renderSlides}
                    parameter={parameter}/>
        </div>

    )
}
export default Reviews;


