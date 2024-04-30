import React from "react";
import s from '../../App.module.css'
import useIsMobile from "../../utils/isMobil";

const ButtonDownloadApp = () => {
    const isMobile = useIsMobile();
    return(
        <span className={isMobile ? s.styleLinkFromFooterBlock : s.styleLinkFromFooterFlex}>Скачать приложение</span>
    )
}

export default ButtonDownloadApp