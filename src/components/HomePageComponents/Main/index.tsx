import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { BooksInWaiting } from '../../BooksWaiting';
import { EmptyBlockBooks } from '../../EmptyBlock/EmptyBlockBooks';
import { EmptyBlockList } from '../../EmptyBlock/EmptyBlockList';
import { TBooks } from '../../../types/types';
import { BooksInList } from '../../BooksList';
import { config } from '../../Config/ConfigText';
import { MainWrapper,
         WaitingBlock,
         ListBooks,
         TitleWaitingBlock,
         TitleListBooks,
         BlockItems,
} from './styled'

export const MainYourOrdesPage = (props: TBooks) => {
    const dispatch = useDispatch(); 
    const items: any = useSelector((state: any) => state.order.items);
    const checkStatusTrue = items.filter((item: any) => item.status === true)
    const checkStatusFalse = items.filter((item: any) => item.status === false)

    return ( 
        <MainWrapper>
            <WaitingBlock>
                <TitleWaitingBlock>{config.heading.blockWaitText}</TitleWaitingBlock>
                <BlockItems>
                { checkStatusTrue.length ?  
                    checkStatusTrue.map((item: any) => <BooksInWaiting key={item.id} {... item} />) : <EmptyBlockBooks />
                }
                </BlockItems>
               
            </WaitingBlock>
            <ListBooks>
                <TitleListBooks>{config.heading.listBookText}</TitleListBooks>
                <BlockItems>
                { checkStatusFalse.length ?  
                    checkStatusFalse.map((item: any) => <BooksInList key={item.id} {... item} />) : <EmptyBlockList />
                }
                </BlockItems>
            </ListBooks>
        </MainWrapper>
    );
};