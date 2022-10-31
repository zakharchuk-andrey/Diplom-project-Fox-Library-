import styled from "styled-components";
import { BasicTheme } from "../Config/Config";
import imgBagBtnClose from "../../assets/icons/close.svg";

// styled-compoments for Log_In
export const StyledWindowLogIn = styled.form`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(181, 181, 181, 0.8);
`;
export const StyledWindowWrapperLogIn = styled.div`
  display: flex;
  transform: translate(100%, 20%);
  position: absolute;
  top: 8%;
  left: 13%;
  flex-direction: column;
  width: 417px;
  height: 369px;
  padding: 40px 0 40px 32px;
  border-radius: 8px;
  background: ${BasicTheme.colors.white};
`;
export const StyledWindowTitle = styled.p`
  font-size: ${BasicTheme.fonts.side};
  line-height: 32.68px;
  font-weight: 700;
`;
export const StyledDescriptionInput = styled.label`
  font-size: ${BasicTheme.fonts.primary};
  line-height: 21.79px;
  color: ${BasicTheme.colors.gray};
  margin-bottom: 4px;
  margin-top: 15px;
`;

export const StyledBtnCloseModalWindow = styled.button`
  background-image: url(${imgBagBtnClose});
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const StyledInput = styled.input`
  width: 320px;
  height: 44px;
  padding: 9px 0 10px 16px;
  border-radius: 8px;
  font-size: ${BasicTheme.fonts.average};
  border: 1px solid ${BasicTheme.colors.secondaryGrey};
  line-height: 24.51px;
`;
