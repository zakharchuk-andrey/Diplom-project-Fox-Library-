import React from 'react';
import styled from 'styled-components';
import { FooterYourOrdesPage } from '../../components/HomePageComponents/Footer';
import { HeaderYourOrdesPage } from '../../components/HomePageComponents/Header';
import { MainYourOrdesPage } from '../../components/HomePageComponents/Main';

export const YourOrdesPage = ({searchValue, setSearchValue}: any) => {
    return (
        <Wrapper>
            <HeaderYourOrdesPage searchValue={searchValue} setSearchValue={setSearchValue}/>
            <MainYourOrdesPage />
            <FooterYourOrdesPage />
        </Wrapper>
    );
};

export const Wrapper = styled.div`
    background: #FAFAFA;
`
