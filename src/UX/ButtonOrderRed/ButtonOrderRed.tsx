import React from 'react';
import styled from 'styled-components';
import { BasicTheme } from '../../components/Config/Config';
import { useSelector, useDispatch } from 'react-redux';

import { addItems } from '../../redux/slices/orderSlice';
import { TBooks } from '../../types/types';

export const ButtonOrderRed = () => {
 

    return (
        <BtnOrder >
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
    color: ${BasicTheme.colors.white};
    background: ${BasicTheme.colors.generalRed};
`