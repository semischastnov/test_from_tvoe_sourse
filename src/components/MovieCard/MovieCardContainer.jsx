import React from "react";
import MovieCard from "./MovieCard";
import {connect} from "react-redux";
import {getMovieCardById, initializedMovieCard} from "../../redux/movieсard-reducer";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        sliderMovieCard: state.allData.sliderMovieCard
    }
}

export default compose(
    connect(mapStateToProps, {initializedMovieCard, getMovieCardById})
)(MovieCard)
