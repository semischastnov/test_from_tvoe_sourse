import React from "react";
import s from '../../App.module.css'
import useIsMobile from "../../utils/isMobil";

const ButtonContacts = () => {
    const isMobile = useIsMobile();
    return(
        <span className={isMobile ? s.styleLinkFromFooterBlock : s.styleLinkFromFooterFlex}>Контакты</span>
    )
}

export default ButtonContacts