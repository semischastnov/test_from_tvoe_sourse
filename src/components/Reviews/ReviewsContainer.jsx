import React from 'react'
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedMovieCard} from "../../redux/movieсard-reducer";
import Reviews from "./Reviews";

let mapStateToProps = (state) => {
    return {
        sliderMovieCard: state.allData.sliderMovieCard
    }
}


export default compose(
    connect(mapStateToProps, {initializedMovieCard})
)(Reviews)
