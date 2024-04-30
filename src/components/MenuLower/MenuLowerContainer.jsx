import React from "react";
import s from '../../App.module.css'
import logoHome from '../../assets/image/logoHome.svg'
import logoFilms from '../../assets/image/logoFilms.svg'
import logoSeries from '../../assets/image/logoSeries.svg'
import logoTV from '../../assets/image/logoTV.svg'
import likeWhite from '../../assets/image/likeWhite.svg'
import useIsMobile from "../../utils/isMobil";


const MenuLowerContainer = () => {
    const isMobile = useIsMobile();
    return (
        <div>
            <div className={isMobile ? s.allBlockMenuLowerMob : s.allBlockMenuLower}>
                <button className={isMobile ? s.buttonMenuLowerMob : s.buttonMenuLower}>
                    <div>
                        <img src={logoHome} alt='logoHome' className={isMobile ? s.imageZoomMob : s.imageZoomMob}/>
                        <div>Главная</div>
                    </div>
                </button>
                <button className={isMobile ? s.buttonMenuLowerMob : s.buttonMenuLower}>
                    <div>
                        <img src={logoFilms} alt='logoFilms' className={isMobile ? s.imageZoomMob : s.imageZoomMob}/>
                        <div>Фильмы</div>
                    </div>
                </button>
                <button className={isMobile ? s.buttonMenuLowerMob : s.buttonMenuLower}>
                    <div>
                        <img src={logoSeries} alt='logoSeries' className={isMobile ? s.imageZoomMob : s.imageZoomMob}/>
                        <div>Сериалы</div>
                    </div>
                </button>
                <button className={isMobile ? s.buttonMenuLowerMob : s.buttonMenuLower}>
                    <div>
                        <img src={logoTV} alt='logoTV' className={isMobile ? s.imageZoomMob : s.imageZoomMob}/>
                        <div>ТВ каналы</div>
                    </div>
                </button>
                <button className={isMobile ? s.buttonMenuLowerMob : s.buttonMenuLower}>
                    <div>
                        <img src={likeWhite} alt='likeWhite' className={isMobile ? s.imageZoomMob : s.imageZoomMob}/>
                        <div>Моё</div>
                    </div>
                </button>
            </div>
        </div>
    )
}
export default MenuLowerContainer;
