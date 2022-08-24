import React from 'react';
import styled from 'styled-components';
import { BooksItem } from '../../BooksItem/BooksItem';

import type { Props } from '../../BooksItem/BooksItem';
import { fetchData } from '../../../config';


export const MainYourOrdersBooks = () => {
    return (
        <MainWrapper>
            <YourOrdersBlock>
               <BooksItem  />
            </YourOrdersBlock> 
        </MainWrapper>
    );
};

export const MainWrapper = styled.div`
    width: 1230px;
    height: auto;
    margin: 40px auto;
`
export const YourOrdersBlock = styled.div`
    width: 1230px;
    height: 647px;
    margin: 0px auto 80px;
    background: #fff;
    border-radius: 16px;
`
// export const TitleYourOrdersBlock = styled.h2`
//     padding: 26px 1076px 20px 32px;
//     font-family: 'Open sans';
//     font-size: 20px;
//     font-weight: 700;
//     line-height: 27px;
//     color: #000000;
// `