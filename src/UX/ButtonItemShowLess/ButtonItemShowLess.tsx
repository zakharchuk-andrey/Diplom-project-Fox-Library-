import React from 'react';
import styled from 'styled-components';
import { BasicTheme } from '../../components/Config/Config';


export const ButtonItemShowLess = () => {
    return (
        <ButtonShowLess>Show less</ButtonShowLess>
    );
};

export const ButtonShowLess = styled.button`
font-family: Open Sans;
font-size: ${BasicTheme.fonts.ensuing};
font-weight: 600;
line-height: 16px;
color: ${BasicTheme.colors.white};
border-radius: 8px;
background: ${BasicTheme.colors.secondaryGrey};
margin-top: 16px;
padding: 6.9px 23.5px;
`
