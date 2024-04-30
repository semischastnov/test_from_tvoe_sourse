import React from "react";
import Card from "./Card";
import useIsMobile from "../../utils/isMobil";
import {NavLink} from "react-router-dom";
import s from "../../App.module.css";
import ButtonInfoMovieCard from "../Buttons/ButtonInfoMovie";
import ButtonToViewMovieCard from "../Buttons/ButtonToViewMovieCard";
import ButtonLikeCard from "../Buttons/ButtonLikeCard";
import ButtonSendCard from "../Buttons/ButtonSendCard";

const MovieCard = (sliderMovieCard) => {
    const isMobile = useIsMobile();

    const renderSlides = () => {
        return sliderMovieCard.sliderMovieCard.map((index) => (
            <div key={index.id}>
                <NavLink to={'/movie'}>
                    <div className={s.container}>
                        <img src={index.img.large}
                             alt={index.name}
                             className={s.containerMovieCard}/>
                        <div className={s.overlayMovieCard}>
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
                        </div>
                    </div>
                </NavLink>
                <div className={s.blockButtonsCard}>
                    {isMobile
                        ? null
                        : <>
                            <ButtonInfoMovieCard/>
                            <ButtonToViewMovieCard/>
                            <ButtonLikeCard/>
                            <ButtonSendCard/>
                        </>}
                </div>
            </div>
        ))
    }
    return (
        <div>
            <Card renderSlides={renderSlides}/>
        </div>

    )
}
export default MovieCard;
