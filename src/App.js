import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {connect} from "react-redux";
import {initializedMovieCard} from "./redux/movieсard-reducer";
import {initializedNewMovies} from "./redux/newMovies-reducer";
import {initializedTopMovies} from "./redux/topMovies-reducer";
import useDisableZoom from "./utils/useDisableZoom";
import AllContainerToMovie from "./components/AllContainerToMovie";
import AllContainerHome from "./components/AllContainerHome";

const App = () => {
    useDisableZoom();

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact path='' element={<AllContainerHome/>}/>
                <Route exact path='/movie' element={<AllContainerToMovie/>}/>
            </Routes>
        </BrowserRouter>)
}
const mapStateToProps = (state) => ({
    sliderMovieCard: state.allData.sliderMovieCard
})


export default connect(mapStateToProps, {initializedMovieCard, initializedNewMovies, initializedTopMovies})(App);
