import React from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../../App';


import logo from '../../../assets/icons/logo.svg';
import user from '../../../assets/icons/user.svg';
import menu_down from '../../../assets/icons/menu_down.svg';
import search from '../../../assets/icons/search.svg';
import { AccountManagementPage } from '../../AccountManagementPage';

const inputPlaceholderText = 'Search by author, title, name'; 

export const HeaderAllBooksPage = () => {

    const [value, setValue] = React.useState('')
    const [activeUserMenu, setActiveUserMenu] = React.useState(false)
    const { setSearchValue } = React.useContext(SearchContext)

    const inputRef = React.useRef();

    const onClickClear = () => {
        setSearchValue('')
        setValue('')
        inputRef.current.focus()
    }

    const updateSearchValue = React.useCallback( debounce((str) => {
        setSearchValue(str);
    }, 250),
    [],
    );
    

    const onChangeInput = event => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    return (
        <NavigationWrapper>
            <Link to="/all-books"><LogoImages src={ logo } alt = 'logo'/></Link> 
            <InputSearchHomePage ref={inputRef} type = "text" placeholder = { inputPlaceholderText } value={value} onChange={onChangeInput} onClick={onClickClear}/>
            <ButtonBlock>
                <ButtonAllBooks><Link  to='/all-books'>All books</Link></ButtonAllBooks>
                <ButtonYourOrders><Link to='/your-orders'>Your orders</Link></ButtonYourOrders>
            </ButtonBlock>
            <BlockUser>
                <img src = { user }/>
                <button onClick={() => setActiveUserMenu(!activeUserMenu)}><MenuUser src = { menu_down }/></button>
                {
                    activeUserMenu && (
                        <AccountManagementPage modalActive={activeUserMenu} setModalActive={setActiveUserMenu} />
                    )
                }
            </BlockUser>
        </NavigationWrapper>
    );
};


// (e) => setSearchValue(e.target.value)

export const LogoImages = styled.img`
    width: 172px;
    height: 32px;
`
export const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px auto 80px;
    width: 1214px;
    height: 50px;
    background: #FAFAFA;
`
export const InputSearchHomePage = styled.input`
    width: 500px;
    height: 48px;
    padding: 13px 205px 13px 50px;
    font-family: 'Open Sans';
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #B5B5B5;
    border: solid 2px #B5B5B5;
    border-radius: 8px;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: 13px 13px;
`
export const ButtonBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 181px;
    height: 30px;
`
export const ButtonAllBooks = styled.button`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    background: #FAFAFA;
    border: none;
    color: #FF5D4F;
    &:hover {
        color: #000000;
    }
    &.active {
        color: #000000;
    }
`
export const ButtonYourOrders = styled.button`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    background: #FAFAFA;
    border: none;
    &:hover {
        color: #FF5D4F;
    }
    &.active {
        color: #FF5D4F;
    }
`
export const BlockUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 69px;
    height: auto;

`
export const MenuUser = styled.img`
    width: 16px;
    height: 10px;
`