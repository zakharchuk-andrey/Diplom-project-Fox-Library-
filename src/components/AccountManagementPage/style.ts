import { Link } from "react-router-dom";
import styled from "styled-components";
import { BasicTheme } from "../Config/Config";

export const UserName = styled.p`
  margin: 20px 0 0 25px;
  font-family: Open Sans;
  font-size: ${BasicTheme.fonts.average};
  font-weight: 600;
  line-height: 25px;
  color: ${BasicTheme.colors.black};
`;

export const PopupManagement = styled.form`
  position: absolute;
  right: 175px;
  top: 75px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 169px;
  height: 200px;
  background: ${BasicTheme.colors.white};
  border-radius: 8px;
  box-shadow: 0px 4px 6px 0px #00000040;
  z-index: 5;
`;
export const ButtonLogOut = styled.button`
  margin: 27px auto 13px;
  padding: 3px 15px;
  font-family: Open Sans;
  font-size: ${BasicTheme.fonts.primary};
  font-weight: 600;
  line-height: 22px;
  color: ${BasicTheme.colors.generalRed};
  border-radius: 8px;
  &:hover {
    background: ${BasicTheme.colors.generalRed};
    color: ${BasicTheme.colors.white};
  }
  &.active {
    background: ${BasicTheme.colors.generalRed};
    color: ${BasicTheme.colors.white};
  }
`;
export const LineImage = styled.img`
  margin: 13px auto 10px;
`;
export const LinksManagement = styled.li`
  font-family: Open Sans;
  font-size: ${BasicTheme.fonts.primary};
  font-weight: 600;
  line-height: 22px;
  color: ${BasicTheme.colors.gray};
`;
export const BlockManagement = styled.ul`
  height: 80px;
  padding: 20px 26px 70px 27px;
`;
export const LinkLogOut = styled(Link)`
  padding: 3px 15px;
  font-family: Open Sans;
  font-size: ${BasicTheme.fonts.primary};
  font-weight: 600;
  line-height: 22px;
  color: ${BasicTheme.colors.generalRed};
  border-radius: 8px;
  &:hover {
    background: ${BasicTheme.colors.generalRed};
    color: ${BasicTheme.colors.white};
  }
  &.active {
    background: ${BasicTheme.colors.generalRed};
    color: ${BasicTheme.colors.white};
  }
`;
