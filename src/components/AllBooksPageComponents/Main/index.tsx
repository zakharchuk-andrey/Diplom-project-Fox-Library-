import React from 'react';
import styled from 'styled-components';

import { fetchData } from '../../../config';
import { TBooks } from '../../../types/types';
import { BooksBlock } from '../../BooksBlock';
import { Skeleton } from '../../Skeleton/Skeleton';
import { SearchContext } from '../../../App';
 
// slice(0, 4)..

export const MainAllBooksPage = () => {
    const {searchValue, setSearchValue} : any = React.useContext(SearchContext)
    const [items, setItems] = React.useState<TBooks[]>([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [noOfElement, setnoOfElement] = React.useState(4)

    const slice = items.slice(0, noOfElement)
    const loadMore = () => {
        setnoOfElement(noOfElement + noOfElement)
    }
    
    React.useEffect(() => {
    setIsLoading(true)
    fetch('https://fox-library-api.herokuapp.com/api/library')
    .then((res) => res.json())
    .then((arr: TBooks[]) =>  {
        const books = arr.filter((obj) => {
            if (obj.name.toLowerCase().includes(searchValue.toLowerCase()) || (obj.author.toLocaleLowerCase().includes(searchValue.toLowerCase())))  {
            { 
                 return true;
             }
                 return false 
            }
         })
        setItems(books)
        setIsLoading(false) })
    }, [searchValue])

    // const filterInput = () => {

    // }
   
         
    const books = slice.map((obj) => <BooksBlock key={obj.id} {... obj} />)

    const skeletons = [ ... new Array(4)].map((_ , index) => <Skeleton key={index}/>)

    return (
        <MainWrapper>
            <AllBooksBlock>
                <TitleAllBooksBlock>All books</TitleAllBooksBlock>
                <BooksContainer>
                    {isLoading ? skeletons : books}
                </BooksContainer>
                <ButtonShowMore onClick={() => loadMore()}>Show more</ButtonShowMore>
            </AllBooksBlock>
        </MainWrapper>
    );
};

export const BooksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    max-width: 1230px;
`
export const MainWrapper = styled.div`
    width: 1230px;
    height: auto;
    margin: 40px auto;
`
export const AllBooksBlock = styled.div`
    width: 1230px;
    min-height: 421px;
    background: #fff;
    border-radius: 16px;
`
export const TitleAllBooksBlock = styled.h2`
    padding: 26px 1076px 0px 32px;
    font-family: 'Open sans';
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    color: #000000;
`
export const ButtonShowMore = styled.button`
    margin: 36px 522.5px 26px 522.5px;
    padding: 10.5px 38px;
    font-family: Open Sans;
    font-size: 20px;
    font-weight: 600;
    line-height: 27px;
    color: #fff;
    background: #FF5D4F;
    border-radius: 8px;
`