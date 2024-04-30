import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getMovieCardById, initializedMovieCard} from "../../redux/movieсard-reducer";
import DescriptionFilm from "./DescriptionFilm";

let mapStateToProps = (state) => {
    return {
        sliderMovieCard: state.allData.sliderMovieCard
    }
}


export default compose(
    connect(mapStateToProps, {initializedMovieCard, getMovieCardById})
)(DescriptionFilm)
