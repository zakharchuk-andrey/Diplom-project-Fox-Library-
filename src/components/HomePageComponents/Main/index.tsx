import React from 'react';
import styled from 'styled-components';
import { BooksInList } from '../../BooksList';

export const MainYourOrdesPage = () => {
    return (
        <MainWrapper>
            <WaitingBlock>
                <TitleWaitingBlock>Waiting for</TitleWaitingBlock>
                <BooksInList />
            </WaitingBlock>
            <ListBooks>
                <TitleListBooks>List of your books</TitleListBooks>
            </ListBooks>
        </MainWrapper>
    );
};

export const MainWrapper = styled.div`
    width: 1230px;
    height: auto;
    margin: 40px auto;
`
export const WaitingBlock = styled.div`
    width: 1230px;
    height: 401px;
    margin: 40px auto;
    background: #fff;
    border-radius: 16px;
`
export const ListBooks = styled.div`
    width: 1230px;
    height: 401px;
    margin: 0 auto;
    background: #ffff;
    border-radius: 16px;
`
export const TitleWaitingBlock = styled.h2`
    padding: 26px 1076px 20px 32px;
    font-family: 'Open sans';
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    color: #000000;
`
export const TitleListBooks = styled.h2`
    padding: 26px 1018px 20px 32px;
    font-family: 'Open sans';
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    color: #000000;
`