import React from 'react';
import styled from 'styled-components';
import userAavatar from '../../../assets/icons/user-avatar.svg';

export const SettingsMainPage = () => {
    return (
        <SettingsMain>
            <SettingsContainer>
                <SettingsTitle>Settings</SettingsTitle>
                <img src = { userAavatar }/>
                <ChangePhotoButton>Change photo</ChangePhotoButton>
                <SettingsForm>
                    <SettingsLabelName>Username</SettingsLabelName>
                    <SettingsInput />
                    <SettingsLabelName>Birthdate</SettingsLabelName>
                    <SettingsInput />
                    <SettingsLabelName>Email</SettingsLabelName>
                    <SettingsInput type = 'email'/>
                    <SettingsLabelName>Password</SettingsLabelName>
                    <SettingsInput type = 'password'/>
                    <SettingsLabelName>New password</SettingsLabelName>
                    <SettingsInput type = 'password'/>
                </SettingsForm>
                <SettingsSaveButton>Save</SettingsSaveButton>
            </SettingsContainer>
        </SettingsMain>
    );
};

export const SettingsMain = styled.div`
    background: #FAFAFA;
`
   
export const SettingsTitle = styled.h1`
    padding: 26px 157px 40px 156px;
    font-family: Open Sans;
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    color: #000000;

`
export const SettingsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 394px;
    height: 730px;
    margin: 80px auto 40px;
    background: #fff;
    border-radius: 8px;
`
export const SettingsForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 320px;
    margin: 0 auto;
`
export const SettingsLabelName = styled.label`
    padding-top: 15px;
    padding-bottom: 4px;
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    color: #000000;
`
export const SettingsInput = styled.input`
    width: 320px;
    height: 44px;
    padding: 9px 0 9px 16px;
    border: solid 1px #B5B5B5;
    border-radius: 8px;
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    color: #000000;
`
export const ChangePhotoButton = styled.button`
    margin: 16px auto 10px;
    padding: 7px 19px;
    border-radius: 8px;
    background: #B5B5B5;
    font-family: Open Sans;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: #FFFFFF;
`
export const SettingsSaveButton = styled.button`
    margin: 20px auto 21px;
    padding: 5px 43px 9px 44px;
    border-radius: 8px;
    background: #FF5D4F;
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    color: #FFF;
`