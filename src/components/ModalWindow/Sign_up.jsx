import styled from "styled-components";
import ModalWindowInput from "./WindowInput";
import ModalWindowBtn from "./BtnModalWindow/WindowBtn";
import imgBagBtnClose from "../../assets/icons/close.svg";

const StyledWindowSignUp = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(181, 181, 181, 0.8);
`;

const StyledWindowTitle = styled.p`
  font-size: 24px;
  line-height: 32.68px;
  margin-bottom: 32px;
  font-weight: 700;
`;
const StyledDescriptionInput = styled.p`
  font-size: 16px;
  line-height: 21.79px;
  color: #616161;
  margin-bottom: 4px;
  margin-top: 15px;
`;
const StyledWindowWraperSignUp = styled.div`
  position: absolute;
  top: 114px;
  left: 658px;
  flex-direction: column;
  width: 384px;
  height: 537px;
  padding: 40px 0 40px 32px;
  border-radius: 8px;
  background: #fff;
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

export const SignUp = ({ show, close }) => {
  return (
    <>
      {show ? (
        <StyledWindowSignUp onClick={() => close()}>
          <StyledWindowWraperSignUp onClick={(e) => e.stopPropagation()}>
            <StyledBtnCloseModalWindow
              onClick={() => close()}
            ></StyledBtnCloseModalWindow>
            <StyledWindowTitle>Welcome to Fox Library</StyledWindowTitle>
            <StyledDescriptionInput>Username</StyledDescriptionInput>
            <ModalWindowInput />
            <StyledDescriptionInput>Your birthdate</StyledDescriptionInput>
            <ModalWindowInput />
            <StyledDescriptionInput>Email</StyledDescriptionInput>
            <ModalWindowInput />
            <StyledDescriptionInput>Password</StyledDescriptionInput>
            <ModalWindowInput />
            <ModalWindowBtn
              data={{
                textBtn: "Sign up",
              }}
            ></ModalWindowBtn>
          </StyledWindowWraperSignUp>
        </StyledWindowSignUp>
      ) : null}
    </>
  );
};
