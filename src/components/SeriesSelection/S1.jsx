import React, {useState} from "react";
import s from '../../App.module.css'
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useIsMobile from "../../utils/isMobil";


const S1 = (sliderMovieCard) => {
    const isMobile = useIsMobile();

    const [selectedSeason, setSelectedSeason] = useState(null);

    const handleSeasonClick = (seasonNumber) => {
        setSelectedSeason(seasonNumber);
    };

    let parameter = isMobile ? '70' : '40';

    const renderSlides = () => {
        if (selectedSeason) {
            return Object.values(sliderMovieCard.sliderMovieCard[0].seasons[`s${selectedSeason}`]).map((index) => (
                <div key={index.number}>
               <span className={s.inLineNewMoviesBlock}>
                    <span>
                        <div className={s.gridSEContainer}>
                        <img src={index.imgSE}
                             alt='Ошибка вывода картинки(или видео)'
                             className={s.containerSliderSeries}/>
                        <div className={s.overlaySliderSeries}>
                                <span className={s.styleInfoLabel}>{index.duration}</span>
                        </div>
                        </div>
                        <div className={s.infoNewMovie}>
                            <div className={s.styleNumberSeries}>{index.number} серия</div>
                            <div className={s.styleInfoName}>{index.viewed}</div>
                        </div>
                    </span>
                </span>
                </div>
            ))
        } else {
            return Object.values(sliderMovieCard.sliderMovieCard[0].seasons.s1).map((index) => (
                <div key={index.number}>
                <span className={s.inLineNewMoviesBlock}>
                    <span>
                        <div className={s.gridSEContainer}>
                        <img src={index.imgSE}
                                 alt='Ошибка вывода картинки(или видео)'
                                 className={s.containerSliderSeries}/>
                        <div className={s.overlaySliderSeries}>
                                <span className={s.styleInfoLabel}>{index.duration}</span>
                        </div>
                        </div>
                        <div className={s.infoNewMovie}>
                            <div className={s.styleNumberSeries}>{index.number} серия</div>
                            <div className={s.styleInfoName}>{index.viewed}</div>
                        </div>
                    </span>
                </span>
                </div>
            ))
        }
    }


    return (
        <div className={s.container2}>
            <div className={s.buttonsSeasons}>
                <button className={isMobile ? s.btnSeasonSelectionMob : s.btnSeasonSelection} onClick={() => handleSeasonClick('0')}>Трейлер</button>
                <button className={isMobile ? s.btnSeasonSelectionMob : s.btnSeasonSelection} onClick={() => handleSeasonClick('1')}>1 сезон</button>
                <button className={isMobile ? s.btnSeasonSelectionMob : s.btnSeasonSelection} onClick={() => handleSeasonClick('2')}>2 сезон</button>
                <button className={isMobile ? s.btnSeasonSelectionMob : s.btnSeasonSelection} onClick={() => handleSeasonClick('3')}>3 сезон</button>
                <button className={isMobile ? s.btnSeasonSelectionMob : s.btnSeasonSelection} onClick={() => handleSeasonClick('4')}>4 сезон</button>
            </div>
            <Carousel
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
export default S1;