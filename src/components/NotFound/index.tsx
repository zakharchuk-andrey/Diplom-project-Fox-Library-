import React from 'react';
import { HeaderAllBooksPage } from '../AllBooksPageComponents/Header';
import { FooterYourOrdesPage } from '../HomePageComponents/Footer';



import { MainNotFound } from './MainNotFound';

export const NotFound = () => {
    return (
        <>
            <HeaderAllBooksPage />
            <MainNotFound />
            <FooterYourOrdesPage />
        </>
    );
};

