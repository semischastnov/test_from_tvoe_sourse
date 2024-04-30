import React from "react";
import s from "../../App.module.css";
import useIsMobile from "../../utils/isMobil";

const ButtonTermsOfUse = () => {
    const isMobile = useIsMobile();
    return(
        <span className={isMobile ? s.styleLinkFromFooterBlock : s.styleLinkFromFooterFlex}>Условия использования</span>
    )
}

export default ButtonTermsOfUse