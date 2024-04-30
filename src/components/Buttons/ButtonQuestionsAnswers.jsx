import React from "react";
import s from "../../App.module.css";
import useIsMobile from "../../utils/isMobil";

const ButtonQuestionsAnswers = () => {
    const isMobile = useIsMobile();
    return(
        <span className={isMobile ? s.styleLinkFromFooterBlock : s.styleLinkFromFooterFlex}>Вопросы и ответы</span>
    )
}

export default ButtonQuestionsAnswers