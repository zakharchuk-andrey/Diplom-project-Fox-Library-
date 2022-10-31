import styled from "styled-components"
import { BasicTheme } from "../../Config/Config"

export const MainWrapper = styled.div`
    width: 1230px;
    height: auto;
    margin: 40px auto;
`
export const WaitingBlock = styled.div`
    width: 1230px;
    height: 401px;
    margin: 40px auto;
    background: ${BasicTheme.colors.white};
    border-radius: 16px;
`
export const ListBooks = styled.div`
    width: 1230px;
    height: 401px;
    margin: 0 auto;
    background: ${BasicTheme.colors.white};
    border-radius: 16px;
`
export const TitleWaitingBlock = styled.h2`
    padding: 26px 1076px 20px 32px;
    font-family: 'Open sans';
    font-size: ${BasicTheme.fonts.secondary};
    font-weight: 700;
    line-height: 27px;
    color: ${BasicTheme.colors.black};
`
export const TitleListBooks = styled.h2`
    padding: 26px 1018px 20px 32px;
    font-family: 'Open sans';
    font-size: ${BasicTheme.fonts.secondary};
    font-weight: 700;
    line-height: 27px;
    color: ${BasicTheme.colors.black};
`
export const BlockItems = styled.div`
    display: flex;
`