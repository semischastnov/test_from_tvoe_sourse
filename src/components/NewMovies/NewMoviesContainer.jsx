import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedNewMovies} from "../../redux/newMovies-reducer";
import NewMovies from "./NewMovies";

let mapStateToProps = (state) => {
    return {
        sliderNewMovie: state.newMovie.sliderNewMovie
    }
}


export default compose(
    connect(mapStateToProps, {initializedNewMovies})
)(NewMovies)
