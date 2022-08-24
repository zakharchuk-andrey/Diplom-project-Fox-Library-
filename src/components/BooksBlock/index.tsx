import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { TBooks } from '../../types/types';
import { RatingStars } from '../RatingStars/RatingStars';
import { useLocation, useNavigate } from 'react-router-dom';

export const BooksBlock = (props: TBooks) => {

    

    return (
        <WrapperBooks key={props.id}>
            <Link to={`/all-books/${props.id}`} state={props}><BooksImages src={props.imageUrl}/></Link>
            <BoolksInfo>
                <ButtonStateBooks>Taken</ButtonStateBooks>
                <BooksName>{props.name}</BooksName>
                <AuthorNameBooks>{props.author}</AuthorNameBooks>
                <BooksRatings ><RatingStars /></BooksRatings>
                <ButtonCheckStatus>Order</ButtonCheckStatus>
            </BoolksInfo>
        </WrapperBooks>
    );
};

export const BoolksInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 122px;
    margin-left: 12px;
    background: #FFF;
`
export const ButtonStateBooks = styled.button`
    padding: 5px 32px;
    font-family: Open Sans;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: #000;
    border: 2px solid #FF5D4F;
    border-radius: 24px;

`
export const WrapperBooks = styled.div`
    display: flex;
    min-width: 256px;
    height: 185px;
    margin-left: 32px;
    margin-top: 48px;
    flex-grow: 1;
`
export const BooksImages = styled.img`
    width: 122px;
    height: 185px;
    border: 1px solid #B5B5B5;
    border-radius: 8px;
    cursor: pointer;
`
export const BooksName = styled.p`
    max-height: 19px;
    margin-top: 30px;
    margin-bottom: 25px;
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    color: #000000;
    overflow: hidden;
`
export const BooksRatings = styled.span`  
    margin-top: 8px;
`
export const ButtonCheckStatus = styled.button`
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
export const AuthorNameBooks = styled.span`
    font-family: Open Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #616161;
`


// const navigate = useNavigate()
    // const openBlockItem = async () => {
    //     try {
    //         const res = await fetch('https://fox-library-api.herokuapp.com/api/library');
    //         const data = await res.json();

    //         navigate(`/all-books/${props.id}`, {state:  {
    //             data, },
    //         });
    //     }   catch (e) {
    //         console.log(e)
    //         }   
    //     }

    // const location: any = useLocation()