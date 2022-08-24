import React from 'react';

import styled from 'styled-components';


import { TBooks } from '../../types/types';
import { fetchData } from '../../config';
import { RatingStars } from '../RatingStars/RatingStars';

export type Props = {
    fetchData: TBooks;
}

export const BooksItem = () => {
    // const [dataValue, setDataValue]= React.useState([])
    // const [isLoading, setIsLoading] = React.useState(true)

    // React.useEffect(() => {
    //     setIsLoading(true)
    //     fetch('https://fox-library-api.herokuapp.com/api/library')
    //     .then((res) => res.json())
    //     .then((arr: TBooks[]) =>  {
    //         const bookses = arr.map(() => {

    //         })
    //         setIsLoading(false) })
    //     }, [dataValue])
    //     console.log()

    
    return (
        <WrapperBooksItem >
                <img />
                 <div>
                     <RatingStars />
                     <h1>A promised land</h1>
                     <p>Barack Obama</p>
                     <span>768 pages, released in 2020</span>
                     <button>Order</button>
                     <h2>About book</h2>
                     <p></p>
                     <button>Show more</button>
                 </div>
        </WrapperBooksItem> 
    );
};

export const WrapperBooksItem = styled.div`
`

                // <img />
                // <div>
                //     <RatingStars />
                //     <h1>A promised land</h1>
                //     <p>Barack Obama</p>
                //     <span>768 pages, released in 2020</span>
                //     <button>Order</button>
                //     <h2>About book</h2>
                //     <p></p>
                //     <button>Show more</button>
                // </div>