import React from "react";
import s from "../../App.module.css";
import logoAttention from '../../../src/assets/image/logoAttention.svg'
import useIsMobile from "../../utils/isMobil";

const DescriptionFilm = (sliderMovieCard) => {
    const isMobile = useIsMobile();
    return(
        <div className={s.container2}>
            <div className={s.buttonsSeasons}>
                <button className={isMobile ? s.btnDescriptionLargeActionMob : s.btnDescriptionLargeAction}>Описание</button>
                <button className={isMobile ? s.btnDescriptionLargeMob : s.btnDescriptionLarge}>Съемочная группа</button>
                <button className={isMobile ? s.btnDescriptionLargeMob : s.btnDescriptionLarge}>Информация</button>
            </div>
            <div className={s.descriptionLarge}>{sliderMovieCard.sliderMovieCard[0].descriptionLarge}</div>
            <div className={s.styleAttention}>
                <span><img src={logoAttention} alt="logoAttention"/></span>
                <span className={s.styleTextAttention}>Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное употребление алкоголя вредит вашему здоровью.</span>
            </div>
        </div>)
}

export default DescriptionFilm