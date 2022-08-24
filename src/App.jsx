import React from 'react';
import styled from "styled-components";
import { Routes, Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { StartedPage } from './pages/StartedPage';
import {YourOrdesPage } from './pages/YourOrdesPage';
import {GlobalStyles} from './styles/stylesGlobal/global';
import { SettingsPage } from './pages/SettingsPage';
import { AllBooksPage } from './pages/AllBooksPage';
import { YourOrdersBooksPage } from './pages/YourOrdersBooksPage';
import { NotFound } from './components/NotFound';

export const SearchContext = React.createContext('')

function App() {
  const [searchValue, setSearchValue] = React.useState('')

  return (
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <WrapperPage className="App">
        <GlobalStyles />
        <Routes>
        <Route path='/' element={<StartedPage />}></Route>
        <Route path='/your-orders' element={<YourOrdesPage/>}></Route>
        <Route path='/all-books' element={<AllBooksPage searchValue={searchValue} />}></Route>
        <Route path='/all-books/:id' element={<YourOrdersBooksPage />}></Route>
        <Route path='/settings' element={<SettingsPage />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
      </WrapperPage>
      </SearchContext.Provider>
      
      
    
    
  );
}

export const WrapperPage = styled.div`
  max-width: 100%;
  padding-top: 30px;
  background: #FAFAFA;
`

export default App;
