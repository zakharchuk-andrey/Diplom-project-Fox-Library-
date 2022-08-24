import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import line from '../../assets/icons/line.svg';

export const AccountManagementPage = ({ modalActive, setModalActive }: any) => {
    return (
        <PopupManagement>
            <UserName>Имя</UserName>
            <BlockManagement>
                <Link to='/settings'><LinksManagement>Settings</LinksManagement></Link>
                <LineImage src = {line} />
                <Link to='/your-orders'><LinksManagement>My orders</LinksManagement></Link>
            </BlockManagement>
            <ButtonLogOut>Log out</ButtonLogOut>
        </PopupManagement>
    );
};
export const UserName = styled.span`
    padding: 20px 100px 0px 20px;
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    color: #000;
`

export const PopupManagement = styled.div`
    position: relative;
    top:140px;
    right: 81px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    width: 169px;
    height: 200px;
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 4px 6px 0px #00000040;
    z-index: 5;

`
export const ButtonLogOut = styled.button`
    margin: 27px auto 13px;
    padding: 3px 15px;
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    color: #FF5D4F;
    border-radius: 8px;
    &:hover {
        background: #FF5D4F;
        color: #FFF;
    }
    &.active {
        background: #FF5D4F;
        color: #FFF;
    }
`
export const LineImage = styled.img`
    margin: 13px auto 10px;
`
export const LinksManagement = styled.li`
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    color: #616161;
`
export const BlockManagement = styled.ul`
    height: 80px;
    padding: 20px 26px 70px 27px;
`