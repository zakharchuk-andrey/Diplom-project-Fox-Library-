import styled from "styled-components";
import { BasicTheme } from "../Config/Config";

export const BoolksInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 122px;
  margin-left: 12px;
  background: ${BasicTheme.colors.white};
`;
export const WrapperBooks = styled.div`
  display: flex;
  min-width: 256px;
  height: 185px;
  margin-left: 32px;
  margin-top: 48px;
  flex-grow: 1;
`;
export const BooksImages = styled.img`
  width: 122px;
  height: 185px;
  border: 1px solid ${BasicTheme.colors.secondaryGrey};
  border-radius: 8px;
  cursor: pointer;
`;
export const BooksName = styled.p`
  max-height: 19px;
  margin-top: 30px;
  margin-bottom: 25px;
  font-family: Open Sans;
  font-size: ${BasicTheme.fonts.auxiliary};
  font-weight: 700;
  line-height: 19px;
  color: ${BasicTheme.colors.black};
  overflow: hidden;
`;
export const BooksRatings = styled.span`
  margin-top: 8px;
`;
export const ButtonOrder = styled.button`
  margin-top: 8px;
  padding: 7px 23px 7px 24px;
  font-family: Open Sans;
  font-size: ${BasicTheme.fonts.ensuing};
  font-weight: 600;
  line-height: 16px;
  color: ${BasicTheme.colors.white};
  background: ${BasicTheme.colors.secondaryGrey};
  border-radius: 8px;
  -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.09),
    0 1px 1px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.09),
    0px 1px 1px rgba(0, 0, 0, 0.2);
  transition: 0.2ms;
  &:hover {
    background-color: #aaaaaa;
  }
  &:active {
    background: ${BasicTheme.colors.white};
    color: ${BasicTheme.colors.black};
    border-color: #1c1c1c #202020 #222;
    -webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.9),
      0 1px rgba(255, 255, 255, 0.02);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3),
      0 1px rgba(255, 255, 255, 0.09);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3),
      0 1px rgba(255, 255, 255, 0.09);
  }
`;
export const AuthorNameBooks = styled.span`
  font-family: Open Sans;
  font-size: ${BasicTheme.fonts.ensuing};
  font-weight: 400;
  line-height: 16px;
  color: ${BasicTheme.colors.gray};
`;
