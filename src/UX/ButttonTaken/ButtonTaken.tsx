import React from 'react';
import styled from 'styled-components';
import { BasicTheme } from '../../components/Config/Config';

export const ButtonTaken = () => {
    return (
        <TakenBtn>
            Taken
        </TakenBtn>
    );
};

export const TakenBtn = styled.button`
    padding: 5px 32px;
    font-family: Open Sans;
    font-size: ${BasicTheme.fonts.ensuing};
    font-weight: 600;
    line-height: 16px;
    color: ${BasicTheme.colors.black};
    border: 2px solid ${BasicTheme.colors.generalRed};
    border-radius: 24px;
`