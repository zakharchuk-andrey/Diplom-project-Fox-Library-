import React from 'react';
import styled from 'styled-components';
import { BasicTheme } from '../../components/Config/Config';

export const ButtonAvailable = () => {
    return (
        <AvailableBtn>
            Available
        </AvailableBtn>
    );
};

export const AvailableBtn = styled.button`
    padding: 5px 23.5px;
    font-family: Open Sans;
    font-size: ${BasicTheme.fonts.ensuing};
    font-weight: 600;
    line-height: 16px;
    color: #000;
    border: 2px solid ${BasicTheme.colors.generalBlue};
    border-radius: 24px;
`