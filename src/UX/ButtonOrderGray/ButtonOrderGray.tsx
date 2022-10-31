import React from 'react';
import styled from 'styled-components';
import { BasicTheme } from '../../components/Config/Config';

export const ButtonOrderGray = () => {
    return (
        <BtnOrder disabled>
            Order
        </BtnOrder>
    );
};

export const BtnOrder = styled.button`
    padding: 9.9px 64px;
    border-radius: 8px;
    margin-top: 10px;       
    font-family: Open Sans;
    font-size: ${BasicTheme.fonts.secondary};
    font-weight: 600;
    line-height: 27px;
    color: #${BasicTheme.colors.white};
    background: ${BasicTheme.colors.secondaryGrey};

`