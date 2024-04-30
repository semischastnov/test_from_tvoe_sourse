import React from "react";
import Play from "./Play";
import useIsMobile from "../../utils/isMobil";
import s from "../../App.module.css";
import BackButton from "../Buttons/BackButton";

const MoviePlay = (sliderMovieCard) => {
    const isMobile = useIsMobile();

    const renderMovie = () => {
        return sliderMovieCard.sliderMovieCard.map((index) => (
            <div key={index.id}>
                <div className={s.container}>
                    <img src={index.img.large}
                         alt={index.name}
                         className={s.containerMovieCard}/>
                    <div className={s.overlayMovieCard}>
                        {isMobile
                            ? <BackButton/>
                            : null}
                        <img src={index.img.logoName} alt={index.name} className={s.logoNameImg}/>
                        <span className={s.styleRatingCard}>{index.rating}</span>
                        <span>●</span>
                        <span className={s.styleYearCard}>{index.year}</span>
                        {isMobile
                            ? <span>
                                <span>●</span>
                                <span className={s.styleSeasonCard}>{index.season}</span>
                                </span>
                            : null}
                        <span>●</span>
                        <span className={s.styleGenreCard}>{index.genre}</span>
                        {isMobile
                            ? null
                            : <span>
                                <span>●</span>
                                <span className={s.styleCountryCard}>{index.country}</span>
                            </span>}
                        {isMobile
                            ? null
                            : <span>
                                <span>●</span>
                                <span className={s.styleAgeLimitedCard}>{index.ageLimit}</span>
                            </span>}
                        {isMobile
                            ? null
                            : <div className={s.description}>
                                {index.description}
                            </div>}
                    </div>
                </div>

                {isMobile
                    ? <div className={s.description}>
                        {index.description}
                    </div>
                    : null}

            </div>
        ))
    }

    return (
            <Play renderMovie={renderMovie}
                  isMobile={isMobile}/>
    )
}
export default MoviePlay;


