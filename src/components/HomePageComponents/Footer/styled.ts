import styled from "styled-components";
import { BasicTheme } from "../../Config/Config";

export const LinkList = styled.ul`
    display: flex;
    flex-direction: column;
`
export const FooterWrapper = styled.div`
    width: auto;
    height: 200px;
    background: ${BasicTheme.colors.secondaryBlue};
    margin: 0 auto;
`
export const FooterBlock = styled.div`
    display: flex;
    align-items: center;
    width: 1230px;
    height: 200px;
    margin: 0 auto;
`
export const AboutBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 185px;
    height: 120px;

`
export const HelpBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 185px;
    height: 120px;
    margin-left: 24px;
`
export const MyAccountBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 185px;
    height: 120px;
    margin-left: 24px;
`
export const ConnectedBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 185px;
    height: 120px;
    margin-left: 442px;
`
export const SocialBlock = styled.div`
    display: flex;
    align-items: center;
`
export const TitleAboutBlock = styled.h3`
    margin-bottom: 20px;
    font-family: 'Open Sans';
    font-size: ${BasicTheme.fonts.average};
    font-weight: 700;
    line-height: 25px;
    color: ${BasicTheme.colors.black};
    `

export const TitleHelpBlock = styled.h3`
    margin-bottom: 20px;
    font-family: 'Open Sans';
    font-size: ${BasicTheme.fonts.average};
    font-weight: 700;
    line-height: 25px;
    color: ${BasicTheme.colors.black};
    `

export const TitleMyAccountBlock = styled.h3`
    margin-bottom: 20px;
    font-family: 'Open Sans';
    font-size: ${BasicTheme.fonts.average};
    font-weight: 700;
    line-height: 25px;
    color: ${BasicTheme.colors.black};
    `

export const TitleSocialBlock = styled.h3`
    margin-bottom: 20px;
    font-family: 'Open Sans';
    font-size: ${BasicTheme.fonts.average};
    font-weight: 700;
    line-height: 25px;
    color: ${BasicTheme.colors.black};
    `

export const LinkFooter = styled.a`
    margin-bottom: 8px;
    font-family: 'Open Sans';
    font-size: ${BasicTheme.fonts.primary};
    font-weight: 400;
    line-height: 22px;
    color: ${BasicTheme.colors.black};
`
export const InstagramImg = styled.img`
    width: 26px;
    height: 26px;
`
export const FacebookImg = styled.img`
    width: 26px;
    height: 26px;
    margin-left: 16px;
`