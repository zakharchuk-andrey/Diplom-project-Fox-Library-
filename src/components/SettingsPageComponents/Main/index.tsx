import React, { useState, useEffect } from "react";
import { SettingsMain,
         SettingsTitle,
         SettingsContainer,
         SettingsForm,
         SettingsLabelName,
         SettingsInput,
         ChangePhotoButton,
         SettingsSaveButton,
         SettingsPhotoImg,
} from "./styled";
import { AnyListenerPredicate } from "@reduxjs/toolkit/dist/listenerMiddleware/types";
import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import { UserAuth } from "../../Context/AuthContext";
import { config } from "../../Config/ConfigText";

export const SettingsMainPage = () => {
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );
  const { user, upload } = UserAuth();
  const auth = getAuth();

  function handleChange(e: any) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }
  function handleClick() {
    upload(photo, user);
  }
  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const triggerResetEmail = async () => {
    console.log(email);
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent");
  };

  return (
    <SettingsMain>
      <SettingsContainer>
        <SettingsTitle>{config.heading.titlePageText}</SettingsTitle>
        <SettingsPhotoImg src={user.photoURL} alt="avatar"></SettingsPhotoImg>
        <ChangePhotoButton onClick={handleClick}>
          {config.buttons.btnChangePhoto}
        </ChangePhotoButton>
        <SettingsInput type="file" onChange={handleChange} />
        <SettingsForm>
          <SettingsLabelName></SettingsLabelName>
          <SettingsInput value={user && user.displayName} />
          <SettingsLabelName>{config.inputs.labeInputBirthDateText}</SettingsLabelName>
          <SettingsInput type="date" />
          <SettingsLabelName>{config.inputs.labelInputEmailText}</SettingsLabelName>
          <SettingsInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SettingsLabelName>{config.inputs.labelInputPasswordText}</SettingsLabelName>
          <SettingsInput type="password" />
          <SettingsLabelName>{config.inputs.labelInputNewPasswordText}</SettingsLabelName>
          <SettingsInput type="password" />
        </SettingsForm>
        <SettingsSaveButton onClick={triggerResetEmail}>
          {config.buttons.btnSaveText}
        </SettingsSaveButton>
      </SettingsContainer>
    </SettingsMain>
  );
};

