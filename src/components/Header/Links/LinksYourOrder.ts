import styled from "styled-components";
import { Link } from "react-router-dom";
import { BasicTheme } from "../../Config/Config";

export const LinkAllBooks = styled(Link)`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: ${BasicTheme.fonts.primary};
  line-height: 22px;
  background: #fafafa;
  border: none;
  color: ${BasicTheme.colors.black};
  &:hover {
    color: ${BasicTheme.colors.generalRed};
  }
  &.active {
    color: ${BasicTheme.colors.generalRed};
  }
`;
export const LinkYourOrder = styled(Link)`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: ${BasicTheme.fonts.primary};
  line-height: 22px;
  color: ${BasicTheme.colors.generalRed};
  background: #fafafa;
  border: none;
  &:hover {
    color: ${BasicTheme.colors.black};
  }
  &.active {
    color: ${BasicTheme.colors.black};
  }
`;