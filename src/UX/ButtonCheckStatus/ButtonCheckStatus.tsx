import React from 'react';
import styled from 'styled-components';
import { BasicTheme } from '../../components/Config/Config';

export const ButtonCheckStatus = () => {
    return (
        <BtnStatus>
            Check status
        </BtnStatus>
    );
};

export const BtnStatus = styled.button`
    padding: 6.9px 23.5px;
    border-radius: 8px;
    margin-top: 10px;       
    font-family: Open Sans;
    font-size: ${BasicTheme.fonts.ensuing};
    font-weight: 600;
    line-height: 16px;
    color: ${BasicTheme.colors.white};
    background: ${BasicTheme.colors.secondaryGrey};

`