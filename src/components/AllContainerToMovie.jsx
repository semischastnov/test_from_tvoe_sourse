import React from "react";
import DescriptionFilmContainer from "./DescriptionFilm/DescriptionFilmContainer";
import SeriesSelectionContainer from "./SeriesSelection/SeriesSelectionContainer";
import ReviewsContainer from "./Reviews/ReviewsContainer";
import FooterContainerPlay from "./Footer/FooterContainerPlay";
import MoviePlayContainer from "./MoviePlay/MoviePlayContainer";
import s from "../App.module.css";
import HeaderContainer from "./header/HeaderContainer";

import MenuLowerContainer from "./MenuLower/MenuLowerContainer";


const AllContainerToMovie = () => {
    return (
        <div className={s.appWrapper}>
            <div className={s.appWrapperH}><HeaderContainer/></div>
            <div className={s.appWrapperM}><MoviePlayContainer/></div>
            <div className={s.appWrapperN}><SeriesSelectionContainer/></div>
            <div className={s.appWrapperS}><DescriptionFilmContainer/></div>
            <div className={s.appWrapperT}><ReviewsContainer/></div>
            <div className={s.appWrapperF}><FooterContainerPlay/></div>
            <div className={s.appWrapperL}><MenuLowerContainer/></div>
        </div>)
}

export default AllContainerToMovie;