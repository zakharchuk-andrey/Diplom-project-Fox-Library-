import React from 'react';
import  StartPage  from '../../../assets/images/start_page.png'
import { WraperContainer,
         StartBlock,
         Title,
         Subtitle,
         ButtonStart,
         StartedImages,
} from "./styled"

import { config } from '../../Config/ConfigText';
import { LogIn } from '../../ModalWindow/Login_in';

export const Main = () => {

    const [activeModalLogInPopup, setActiveModalLogInPopup] = React.useState(false);
    const ToggleModalLogInPopup = () =>
      setActiveModalLogInPopup(!activeModalLogInPopup);

    return (
        <WraperContainer>
            <StartBlock>
                <LogIn show={activeModalLogInPopup} close={ToggleModalLogInPopup} />
                <Title>{config.heading.startTitleText}</Title>
                <Subtitle>{config.heading.commentLibraryText}</Subtitle>
                <ButtonStart onClick={ToggleModalLogInPopup}>{config.buttons.btnSearchText}</ButtonStart>
            </StartBlock>
            <div>
                <StartedImages src = {StartPage} alt = 'start page'/>
            </div>
        </WraperContainer>
    )
};