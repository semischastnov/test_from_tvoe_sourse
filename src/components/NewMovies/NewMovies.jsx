import React from "react";
import Movies from "./Movies";
import useIsMobile from "../../utils/isMobil";
import s from "../../App.module.css";

const NewMovies = (sliderNewMovie) => {
    const isMobile = useIsMobile();
    let parameter = isMobile ? '50' : '24';
    const renderSlides = () => {
        return sliderNewMovie.sliderNewMovie.map((index) => (
            <div key={index}>
                <span className={s.inLineNewMoviesBlock}>
                    <span>

                            <img src={index.img}
                                 alt={index.name}
                                 className={s.container2NewMovie}/>
                        <div className={s.overlay2NewMovie}>
                                <span className={isMobile ? s.styleRatingCardMob : s.styleRatingCard}>{index.rating}</span>
                                <span className={isMobile ? s.styleInfoLabelMob : s.styleInfoLabel}>{index.label}</span>
                        </div>
                        <div className={s.infoNewMovie}>
                            <div className={s.styleInfoName}>{index.name}</div>
                            {isMobile ? null
                                : <span className={s.styleInfoYear}>{index.year}</span>}
                            {isMobile ? null
                                : <span className={s.styleInfoDuration}>{index.duration}</span>}
                            {isMobile
                                ? <span className={s.styleInfoSeason}>{index.season}</span>
                                : null}
                            <span className={s.styleGenreCard}>{index.genre}</span>
                            {isMobile
                                ? null
                                : <span className={s.styleCountryCard}>{index.country}</span>}
                            {isMobile
                                ? null
                                : <span className={s.styleAgeLimitedCard}>{index.ageLimit}</span>}
                        </div>
                    </span>
                </span>
            </div>
        ))
    }


    return (
        <div>
            <Movies renderSlides={renderSlides}
                    parameter={parameter}/>
        </div>

    )
}
export default NewMovies;
