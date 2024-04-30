import React from "react";
import s from "../App.module.css";
import HeaderContainer from "./header/HeaderContainer";

import MenuLowerContainer from "./MenuLower/MenuLowerContainer";
import NewMoviesContainer from "./NewMovies/NewMoviesContainer";
import TopMovieContainer from "./TopMovie/TopMovieContainer";
import FooterContainer from "./Footer/FooterContainer";
import MovieCardContainer from "./MovieCard/MovieCardContainer";
import SubscriptionContainer from "./Subscription/SubscriptionContainer";


const AllContainerHome = () => {
    return (
        <div className={s.appWrapper}>
            <div className={s.appWrapperH}><HeaderContainer/></div>
            <div className={s.appWrapperM}><MovieCardContainer/></div>
            <div className={s.appWrapperN}><NewMoviesContainer/></div>
            <div className={s.appWrapperT}><TopMovieContainer/></div>
            <div className={s.appWrapperF}><FooterContainer/></div>
            <div className={s.appWrapperS}><SubscriptionContainer/></div>
            <div className={s.appWrapperL}><MenuLowerContainer/></div>
        </div>)
}

export default AllContainerHome;