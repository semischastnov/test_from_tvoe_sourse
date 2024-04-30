import React from "react";
import ButtonSubscription from "../Buttons/ButtonSubscription";
import popcorn2 from '../../assets/image/popcorn2.png'
import s from '../../App.module.css'
import img1 from '../../assets/image/img1.svg'
import img2 from '../../assets/image/img2.svg'
import img3 from '../../assets/image/img3.svg'
import img4 from '../../assets/image/img4.svg'
import useIsMobile from "../../utils/isMobil";
import ButtonSubscriptionMobVersion from "../Buttons/ButtonSubscriptionMobVersion";

const SubscriptionContainer = () => {
    const isMobile = useIsMobile();
    return (
        <div>
            <div className={isMobile ? s.allTextSubscriptionContainerMob : s.allTextSubscriptionContainer}>
                {isMobile ? <div className={s.popcornItem1Mob}>СМОТРИ</div>
                    : <div className={s.popcornItem1}>СМОТРИ</div>}
                {isMobile ? <div className={s.popcornItem2Mob}>ЗАРУБЕЖНОЕ КИНО</div>
                    : <div className={s.popcornItem2}>КИНО</div>}

                <div className={isMobile ? s.popcornItem3Mob : s.popcornItem3}>
                    <span className={isMobile ? s.popcornItemSpanImgMob : s.popcornItemSpanImg}><img src={img1}
                                                                                                     alt='no img'/></span>
                    <span>  От 149 ₽ в месяц</span>
                </div>
                <div className={isMobile ? s.popcornItem5Mob : s.popcornItem5}>
                    <span className={isMobile ? s.popcornItemSpanImgMob : s.popcornItemSpanImg}><img src={img2}
                                                                                                     alt='no img'/></span>
                    <span>Доступно на любом устройсве</span>
                </div>
                <div className={isMobile ? s.popcornItem4Mob : s.popcornItem4}>
                    <span className={isMobile ? s.popcornItemSpanImgMob : s.popcornItemSpanImg}><img src={img3}
                                                                                                     alt='no img'/></span>
                    <span>Никакой рекламы</span>
                </div>
                <div className={isMobile ? s.popcornItem6Mob : s.popcornItem6}>
                    <span className={isMobile ? s.popcornItemSpanImgMob : s.popcornItemSpanImg}><img src={img4}
                                                                                                     alt='no img'/></span>
                    <span>Единая подписка без доплат</span>
                </div>

                <div className={isMobile ? s.popcornItem7Mob : s.popcornItem7}>
                    {isMobile ? <ButtonSubscriptionMobVersion/> : <ButtonSubscription/>}
                </div>
                <span className={isMobile ? s.popcornSubMob : s.popcornSub}>Субтитры</span>
                <span className={isMobile ? s.popcornDubMob : s.popcornDub}>Дубляж</span>
                <span className={isMobile ? s.popcornFullHDMob : s.popcornFullHD}>FULL HD</span>
                <img src={popcorn2} alt='popcorn2' className={isMobile ? s.popcornItem8Mob : s.popcornItem8}/>
            </div>
        </div>
    )
}
export default SubscriptionContainer;
