import styled from 'styled-components';
import { BasicTheme } from '../../Config/Config';
import search from '../../../assets/icons/search.svg';

export const LogoImages = styled.img`
    width: 172px;
    height: 32px;
`
export const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px auto;
    width: 1214px;
    height: 50px;
`
export const InputSearch = styled.input`
    width: 500px;
    height: 48px;
    padding: 13px 205px 13px 50px;
    font-family: 'Open Sans';
    font-size: ${BasicTheme.fonts.primary};
    font-weight: 400;
    line-height: 22px;
    color: ${BasicTheme.colors.secondaryGrey};
    border: solid 2px #FF5D4F;
    border-radius: 8px;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: 13px 13px;
`
export const ButtonBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 181px;
    height: 30px;
`
export const ButtonLogin = styled.button`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: ${BasicTheme.fonts.secondary};
    line-height: 27px;
    color: ${BasicTheme.colors.gray};
    border: none;
    &:hover {
        color: ${BasicTheme.colors.generalRed};
    }
    &.active {
        color: ${BasicTheme.colors.generalRed};
    }
`
export const ButtonSignUp = styled.button`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: ${BasicTheme.fonts.secondary};
    line-height: 27px;
    color: ${BasicTheme.colors.gray};
    border: none;
    &:hover {
        color: ${BasicTheme.colors.generalRed};
    }
    &.active {
        color: ${BasicTheme.colors.generalRed};
    }
`