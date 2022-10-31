import styled from "styled-components";
import { BasicTheme } from "../../Config/Config";

const StyledBtnSignUp = styled.button`
  border-radius: 8px;
  padding: 10px 130px;
  margin-top:24px;
  background: ${BasicTheme.colors.generalRed};
  font-size: ${BasicTheme.fonts.average};
  line-height: 24.51px;
  color: ${BasicTheme.colors.white};
  border: none;
  width: 320px;
  height: 44px;
`;
export type BtnText = {
  textBtn: string;
};
export type Props = {
  data: BtnText;
};
const ModalWindowBtn = ({ data }: Props) => {
  return <StyledBtnSignUp>{data.textBtn}</StyledBtnSignUp>;
};
export default ModalWindowBtn;
