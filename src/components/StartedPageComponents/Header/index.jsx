import React from 'react';
import { LogoImages,
         NavigationWrapper,
         InputSearch,
         ButtonBlock,
         ButtonLogin,
         ButtonSignUp,
} from "./styled"
import { Link } from 'react-router-dom';
import { config } from '../../Config/ConfigText';
import logo from '../../../assets/icons/logo.svg';
import { LogIn }  from '../../ModalWindow/Login_in';
import { SignUp } from '../../ModalWindow/Sign_up';


const inputPlaceholderText = 'Search by author, title, name';

export const Header = () => {

    const [activeModalLogInPopup, setActiveModalLogInPopup] = React.useState(false);
    const [activeModalSignUpPopup, setActiveModalSignUpPopup] = React.useState(false);
    const ToggleModalLogInPopup = () =>
      setActiveModalLogInPopup(!activeModalLogInPopup);
    const ToggleModalSignUpPopup = () =>
      setActiveModalSignUpPopup(!activeModalSignUpPopup);

    return (
        <NavigationWrapper>
            <LogIn show={activeModalLogInPopup} close={ToggleModalLogInPopup} />
            <SignUp show={activeModalSignUpPopup} close={ToggleModalSignUpPopup} />
            <Link to="/"><LogoImages src={ logo } alt = 'logo'/></Link> 
            <InputSearch disabled  type = "text" placeholder = { inputPlaceholderText }/>
            <ButtonBlock>
                <ButtonLogin onClick={() => ToggleModalLogInPopup()}>{config.buttons.btnModalLogInText}</ButtonLogin>
                <ButtonSignUp onClick={() => ToggleModalSignUpPopup()}>{config.buttons.btnModalSignUpText}</ButtonSignUp>
            </ButtonBlock>
        </NavigationWrapper>
    )
};