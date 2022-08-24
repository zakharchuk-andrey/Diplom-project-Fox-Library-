import styled from "styled-components";
import ModalWindowInput from "./WindowInput";
import ModalWindowBtn from "./BtnModalWindow/WindowBtn";
import imgBagBtnClose from "../../assets/icons/close.svg";

const StyledWindowLogIn = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: rgba(181, 181, 181, 0.8);
`;
const StyledWindowWraperLogIn = styled.div`
  position: absolute;
  top: 114px;
  left: 658px;
  flex-direction: column;
  width: 417px;
  height: 369px;
  padding: 40px 0 40px 32px;
  border-radius: 8px;
  background: #fff;
`;
const StyledWindowTitle = styled.p`
  font-size: 24px;
  line-height: 32.68px;
  font-weight: 700;
`;
const StyledDescriptionInput = styled.p`
  font-size: 16px;
  line-height: 21.79px;
  color: #616161;
  margin-bottom: 4px;
  margin-top: 15px;
`;

const StyledBtnCloseModalWindow = styled.button`
  background-image: url(${imgBagBtnClose});
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  border: none;
  position:absolute;
  top:20px;
  right:20px;
`;

export const LogIn = ({ show, close }) => {
  return (
    <>
      {show ? (
        <StyledWindowLogIn onClick={() => close()}>
          <StyledWindowWraperLogIn onClick={(e) => e.stopPropagation()}>
            <StyledBtnCloseModalWindow
              onClick={() => close()}
            ></StyledBtnCloseModalWindow>
            <StyledWindowTitle>Log In to Fox Library</StyledWindowTitle>
            <StyledDescriptionInput>Username</StyledDescriptionInput>
            <ModalWindowInput />
            <StyledDescriptionInput>Password</StyledDescriptionInput>
            <ModalWindowInput />
            <ModalWindowBtn
              data={{
                textBtn: "Log In",
              }}
            ></ModalWindowBtn>
          </StyledWindowWraperLogIn>
        </StyledWindowLogIn>
      ) : null}
    </>
  );
};
