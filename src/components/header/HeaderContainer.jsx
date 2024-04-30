import React from "react";
import LoginContainer from "../Login/LoginContainer";
import fullLogo from "../../assets/image/fullLogo.svg";
import s from "../../App.module.css";
import ButtonPromoCodeHeader from "../Buttons/ButtonPromoCodeHeader";
import ButtonSearchCodeHeader from "../Buttons/ButtonSearchHeader";
import ButtonSubscriptionHeader from "../Buttons/ButtonSubscriptionHeader";


const HeaderContainer = () => {
    return (
        <div>
            <img src={fullLogo} alt='fullLogo' className={s.fullLogo}/>
            <LoginContainer/>
            <ButtonPromoCodeHeader/>
            <ButtonSubscriptionHeader/>
            <ButtonSearchCodeHeader/>
        </div>
    )
}
export default HeaderContainer;