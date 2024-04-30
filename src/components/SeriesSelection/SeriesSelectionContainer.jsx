import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import SeriesSelection from "./SeriesSelection";
import {getMovieCardById, initializedMovieCard} from "../../redux/movieсard-reducer";

let mapStateToProps = (state) => {
    return {
        sliderMovieCard: state.allData.sliderMovieCard
    }
}

export default compose(
    connect(mapStateToProps, {initializedMovieCard, getMovieCardById})
)(SeriesSelection)
