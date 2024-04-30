import React from "react";
import fullLogo from "../../assets/image/fullLogo.svg";
import logoYouTubeBlue from "../../assets/image/logoYouTubeBlue.svg";
import logoVkBlue from "../../assets/image/logoVkBlue.svg";
import logoTelegramBlue from "../../assets/image/logoTelegramBlue.svg";
import s from "../../App.module.css";
import ButtonTechnicalSupportFooter from "../Buttons/ButtonTechnicalSupportFooter";
import ButtonContacts from "../Buttons/ButtonContacts";
import ButtonReferralProgram from "../Buttons/ButtonReferralProgram";
import ButtonTermsOfUse from "../Buttons/ButtonTermsOfUse";
import ButtonDownloadApp from "../Buttons/ButtonDownloadApp";
import ButtonQuestionsAnswers from "../Buttons/ButtonQuestionsAnswers";
import useIsMobile from "../../utils/isMobil";
import ButtonPromoCodeFooter from "../Buttons/ButtonPromoCodeFooter";


const FooterContainer = () => {
    const isMobile = useIsMobile();

    return (
        <div>
            <div className={s.indentation}>
                <div className={isMobile ? s.positionCenterBlock : s.positionCenterFlex}>
                    <div>
                        {isMobile ? <ButtonPromoCodeFooter/> : <ButtonTechnicalSupportFooter/>}
                    </div>
                    <div className={isMobile ? s.allLinksFooterContainerMob : s.allLinksFooterContainer}>
                        <div className={isMobile ? s.linksYoutubeFooterMob : s.linksYoutubeFooter}>
                            <a href='https://www.youtube.com/' className={isMobile ? s.blockButtonFooterBlock : s.blockButtonFooterFlex}>
                                YouTube
                                <div><img src={logoYouTubeBlue} alt='logoYouTube' className={s.filterForLinks}/></div>
                            </a>
                        </div>
                        <div className={isMobile ? s.linksVKFooterMob : s.linksVKFooter}>
                            <a href='https://www.vk.com/' className={isMobile ? s.blockButtonFooterBlock : s.blockButtonFooterFlex}>
                                ВКонтакте
                                <div><img src={logoVkBlue} alt='logoVk' className={s.filterForLinks}/></div>
                            </a>
                        </div>
                        <div className={isMobile ? s.linksTGKFooterMob : s.linksTGKFooter}>
                            <a href='https://www.t.me/' className={isMobile ? s.blockButtonFooterBlock : s.blockButtonFooterFlex}>
                                Telegram
                                <div><img src={logoTelegramBlue} alt='logoTelegram' className={s.filterForLinks}/></div>
                            </a>
                        </div>
                    </div>
                </div>


                <div>
                    <div className={isMobile ? s.positionCenterBlock : s.positionCenterFlex}>
                        <button className={s.blockButtonFooterInComponentBlock}><ButtonContacts/></button>
                        <button className={s.blockButtonFooterInComponentBlock}><ButtonReferralProgram/></button>
                        <button className={s.blockButtonFooterInComponentBlock}><ButtonDownloadApp/></button>
                        <button className={s.blockButtonFooterInComponentBlock}><ButtonQuestionsAnswers/></button>
                        <button className={s.blockButtonFooterInComponentBlock}><ButtonTermsOfUse/></button>
                        {isMobile ? <ButtonTechnicalSupportFooter/> : null}
                    </div>
                </div>
                <hr className={s.margiHr}/>
                <div>
                    <div className={s.innFromFooterContainer}>
                    <div className={isMobile ? s.innFooterMob : s.innFooter}>
                        <div>2023, ООО "ТВОЁЛАЙВ" 18+</div>
                        <div>ИНН 7720904034</div>
                    </div>
                    <div className={s.logoFooterCenter}>
                        <img src={fullLogo} alt='no image' className={s.fullLogoFooter}/>
                    </div>
                    </div>
                    {isMobile
                        ? <div>
                            <bitton className={s.TryForFree}>
                                Попробовать бесплатно
                            </bitton>
                        </div>
                        : null}
                </div>
            </div>
        </div>
    )
}
export default FooterContainer;
