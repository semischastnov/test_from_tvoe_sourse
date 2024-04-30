import React, {useState} from "react";
import Top from "./Top";
import s from '../../App.module.css'
import useIsMobile from "../../utils/isMobil";


const TopMovies = (sliderTopMovie) => {
    const isMobile = useIsMobile();
    const [shades, setShades] = useState(Array(sliderTopMovie.sliderTopMovie.length).fill(false));

    const handleMouseEnter = (index) => {
        setShades(prevShades => {
            let newShades = [...prevShades];
            newShades[index] = true;
            return newShades;
        });
    }

    const handleMouseLeave = (index) => {
        setShades(prevShades => {
            let newShades = [...prevShades];
            newShades[index] = false;
            return newShades;
        });
    }

    let parameter = isMobile ? '50' : '35';

    const renderSlides = () => {
        return sliderTopMovie.sliderTopMovie.map((index, i) => (
            <div key={index} onMouseEnter={() => handleMouseEnter(i)}
                 onMouseLeave={() => handleMouseLeave(i)}>
                <span className={s.inLineTopMoviesBlock}>
                    <span className={s.imageContainer}>
                            <img src={shades[i] ? index.imgShaded : index.imgNotShaded}
                                 alt={index.name}
                                 className={isMobile ? s.topImageMob : s.topImage}/>
                        <img src={index.img}
                             alt={index.name}
                             className={s.bottomImage}/>

                    </span>
                </span>
            </div>
        ))
    }

    return (
        <div>
            <Top renderSlides={renderSlides}
                 parameter={parameter}/>
        </div>

    )
}
export default TopMovies;
