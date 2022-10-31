import styled from "styled-components";

import ModalWindowBtn from "./BtnModalWindow/WindowBtn";
import {StyledWindowLogIn,
  StyledWindowTitle,
  StyledDescriptionInput,
  StyledWindowWrapperLogIn,
  StyledBtnCloseModalWindow,
  StyledInput,} from './styled_log-in';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { config } from "../Config/ConfigText";

export const LogIn = ({ show, close }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/all-books");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      {show ? (
        <StyledWindowLogIn onClick={() => close()} onSubmit={handleSubmit}>
          <StyledWindowWrapperLogIn onClick={(e) => e.stopPropagation()}>
            <StyledBtnCloseModalWindow
              onClick={() => close()}
            ></StyledBtnCloseModalWindow>
            <StyledWindowTitle>{config.heading.modalRequestText}</StyledWindowTitle>
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
            // 
              data={{
                textBtn: "Log In",
              }}
              // 
            ></ModalWindowBtn>
          </StyledWindowWrapperLogIn>
        </StyledWindowLogIn>
      ) : null}
    </>
  );
};
