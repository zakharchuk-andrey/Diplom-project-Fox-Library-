import styled from 'styled-components';
import { BasicTheme } from '../../Config/Config';

export const WraperContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 34px auto 265px;
    width: 1240px;
    height: 494px;
    background: ${BasicTheme.colors.secondaryBlue};
    border-radius: 8px;
`
export const StartBlock = styled.div`
    width: auto;
    height: 294px;
    margin: 100px 117px 100px 80px;
`
export const Title = styled.h2`
    margin-bottom: 40px;
    font-family: 'Open Sans';
    font-size: ${BasicTheme.fonts.success};
    font-weight: 700;
    line-height: 52px;
    color: ${BasicTheme.colors.black};
`
export const Subtitle = styled.p`
    width: 314px;
    margin-bottom: 40px;
    font-family: 'Open Sans';
    font-size: ${BasicTheme.fonts.sparse};
    font-weight: 600;
    line-height: 38px;
    color: ${BasicTheme.colors.black};
`
export const ButtonStart = styled.button`
    padding: 11px 45px 10px 45px;
    font-family: 'Open Sans';
    font-size: ${BasicTheme.fonts.secondary};
    font-weight: 600;
    line-height: 27px;
    color:${BasicTheme.colors.white};
    background: ${BasicTheme.colors.generalRed};
    border-radius: 8px;
`
export const StartedImages = styled.img`
    margin-right: 95px;
`