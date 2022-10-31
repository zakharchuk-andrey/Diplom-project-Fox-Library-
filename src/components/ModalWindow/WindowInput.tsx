import styled from "styled-components";
import { BasicTheme } from "../Config/Config";

const StyledInput = styled.input`
  width: 320px;
  height: 44px;
  padding: 9px 0 10px 16px;
  border-radius: 8px;
  font-size: ${BasicTheme.fonts.average};
  border: 1px solid ${BasicTheme.colors.secondaryGrey};
  line-height: 24.51px;
`;
const ModalWindowInput = () => {
  return <StyledInput></StyledInput>;
};

