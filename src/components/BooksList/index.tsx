import React from 'react';
import styled from 'styled-components';


// import { TBooks } from '../../types/types';
import test from '../../assets/images/test.svg'
import star from '../../assets/icons/star.svg'

export const BooksInList = () => {
    return (
        <BooksContainerInList>
            <BooksImagesList src={test}/>
            <BooskNameList>A promised land by Barack Obama</BooskNameList>
            <BooksRatingsList><img src={star} /></BooksRatingsList>
            <ButtonStatus>Check status</ButtonStatus>
        </BooksContainerInList>
    );
};

export const BooksContainerInList = styled.div`
    display: flex;
    width: 122px;
    flex-direction: column;
    margin-left: 32px;
`

export const BooksImagesList = styled.img`
    width: 122px;
    height: 185px;
`
export const BooskNameList = styled.span`
    margin: 8px auto;
    font-family: Open Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #000;
`
export const BooksRatingsList = styled.span`  
    margin: 8px auto;
    width: 19px;
    height: 19px;
    border-radius: 1px;
`
export const ButtonStatus = styled.button`
    margin-top: 8px;
    padding: 7px 23px 7px 24px;
    font-family: Open Sans;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color:#fff;
    background: #B5B5B5;
    border-radius: 8px;
`