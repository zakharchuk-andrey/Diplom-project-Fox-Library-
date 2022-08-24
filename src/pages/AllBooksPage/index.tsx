import React from 'react';
import styled from 'styled-components';
import { FooterYourOrdesPage } from '../../components/HomePageComponents/Footer';
import { HeaderAllBooksPage } from '../../components/AllBooksPageComponents/Header';
import { MainAllBooksPage } from '../../components/AllBooksPageComponents/Main';


export const AllBooksPage = () => {
    return (
        <Wrapper>
            <HeaderAllBooksPage  />
            <MainAllBooksPage />
            <FooterYourOrdesPage />
        </Wrapper>
    );
};

export const Wrapper = styled.div`
    max-width: 100%;
    background: #FAFAFA;
`