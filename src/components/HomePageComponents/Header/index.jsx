import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../../../assets/icons/logo.svg';
import user from '../../../assets/icons/user.svg';
import menu_down from '../../../assets/icons/menu_down.svg';
import menu_up from '../../../assets/icons/menu_up.svg';
import search from '../../../assets/icons/search.svg';
import { AccountManagementPage } from '../../AccountManagementPage';

const inputPlaceholderText = 'Search by author, title, name';

export const HeaderYourOrdesPage = ({searchValue, setSearchValue}) => {

    const [activeUserMenu, setActiveUserMenu] = React.useState(false)
    
    return (
        <NavigationWrapper onClick={() => setActiveUserMenu(!activeUserMenu)}>
            <Link to="/all-books"><LogoImages src={ logo } alt = 'logo'/></Link> 
            <InputSearchHomePage  type = "text" placeholder = { inputPlaceholderText } />
            <ButtonBlock>
                <ButtonAllBooks><Link to='/all-books'>All books</Link></ButtonAllBooks>
                <ButtonYourOrders><Link to='/your-orders'></Link>Your orders</ButtonYourOrders>
            </ButtonBlock>
            <BlockUser>
                <img src = { user }/>
                <ButtonUserMenu  onClick={() => setActiveUserMenu(!activeUserMenu)}></ButtonUserMenu>
                {
                    activeUserMenu && (
                        <AccountManagementPage modalActive={activeUserMenu} setModalActive={setActiveUserMenu} />
                    )
                }
            </BlockUser>
        </NavigationWrapper>
    );
};

export const LogoImages = styled.img`
    width: 172px;
    height: 32px;
`
export const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px auto 80px ;
    width: 1214px;
    height: 50px;
`
export const InputSearchHomePage = styled.input`
    width: 500px;
    height: 48px;
    padding: 13px 205px 13px 50px;
    font-family: 'Open Sans';
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #B5B5B5;
    border: solid 2px #B5B5B5;
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
export const ButtonAllBooks = styled.button`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    background: #FAFAFA;
    border: none;
    &:hover {
        color: #FF5D4F;
    }
    &.active {
        color: #FF5D4F;
    }
`
export const ButtonYourOrders = styled.button`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #FF5D4F;
    background: #FAFAFA;
    border: none;
    &:hover {
        color: #000;
    }
    &.active {
        color: #000;
    }
`
export const BlockUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 69px;
    height: auto;

`
export const ButtonUserMenu = styled.button`
    position: relative;
    width: 16px;
    height: 16px;
    background-image: url(${menu_down});
    background-repeat: no-repeat;
`