import React from "react";
import s from '../../App.module.css'
import useIsMobile from "../../utils/isMobil";

const ButtonReferralProgram = () => {
    const isMobile = useIsMobile();
    return(
        <span className={isMobile ? s.styleLinkFromFooterBlock : s.styleLinkFromFooterFlex}>Реферальная программа</span>
    )
}

export default ButtonReferralProgram