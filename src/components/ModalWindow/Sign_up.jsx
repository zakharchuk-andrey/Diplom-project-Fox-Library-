import { StyledWindowSignUp,
         StyledWindowTitle,
         StyledDescriptionInput,
         StyledWindowWrapperSignUp,
         StyledBtnCloseModalWindow,
         StyledInput,
} from "./styled_sing-up";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { config } from "../Config/ConfigText";

import ModalWindowBtn from "./BtnModalWindow/WindowBtn";




export const SignUp = ({ show, close }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register(email, password, name);
      navigate("/all-books");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <>
      {show ? (
        <StyledWindowSignUp onClick={() => close()} onSubmit={handleSubmit}>
          <StyledWindowWrapperSignUp onClick={(e) => e.stopPropagation()}>
            <StyledBtnCloseModalWindow
              onClick={() => close()}
            ></StyledBtnCloseModalWindow>
            <StyledWindowTitle>{config.heading.modalInvitationText}</StyledWindowTitle>

            <StyledDescriptionInput>{config.inputs.labelInputUserText}</StyledDescriptionInput>
            <StyledInput
              onChange={(e) => setName(e.target.value)}
              type="text"
            ></StyledInput>

            {/* <StyledDescriptionInput>{config.inputs.labeInputBirthDateText}</StyledDescriptionInput>
            <StyledInput
              type="text"
            ></StyledInput> */}

            <StyledDescriptionInput>{config.inputs.labelInputEmailText}</StyledDescriptionInput>
            <StyledInput
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            ></StyledInput>

            <StyledDescriptionInput>{config.inputs.labelInputPasswordText}</StyledDescriptionInput>
            <StyledInput
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            ></StyledInput>

            <ModalWindowBtn
              onSubmit={handleSubmit}
              data={{
                textBtn: "Sign up",
              }}
              
            ></ModalWindowBtn>
          </StyledWindowWrapperSignUp>
        </StyledWindowSignUp>
      ) : null}
    </>
  );
};
