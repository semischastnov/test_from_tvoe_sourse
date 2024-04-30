import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import TopMovies from "./TopMovies";
import {initializedTopMovies} from "../../redux/topMovies-reducer";

let mapStateToProps = (state) => {
    return {
        sliderTopMovie: state.topMovie.sliderTopMovie
    }
}

export default compose(
    connect(mapStateToProps, {initializedTopMovies})
)(TopMovies)
