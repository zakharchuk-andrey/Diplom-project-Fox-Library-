import styled from "styled-components";
import { BasicTheme } from "../../Config/Config";

export const SettingsMain = styled.div`
  background: #fafafa;
`;

export const SettingsTitle = styled.h1`
  padding: 26px 157px 40px 156px;
  font-family: Open Sans;
  font-size: ${BasicTheme.fonts.secondary};
  font-weight: 700;
  line-height: 27px;
  color: ${BasicTheme.colors.black};
`;

export const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 394px;
  height: 730px;
  margin: 80px auto 40px;
  background: ${BasicTheme.colors.white};
  border-radius: 8px;
`;

export const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 0 auto;
`;

export const SettingsLabelName = styled.label`
  padding-top: 15px;
  padding-bottom: 4px;
  font-family: Open Sans;
  font-size: ${BasicTheme.fonts.primary};
  font-weight: 600;
  line-height: 22px;
  color: ${BasicTheme.colors.black};
`;

export const SettingsInput = styled.input`
  width: 320px;
  align-items: center;
  padding: 7px 19px;
  border: solid 1px ${BasicTheme.colors.secondaryGrey};
  border-radius: 8px;
  font-family: Open Sans;
  font-size: ${BasicTheme.fonts.primary};
  font-weight: 400;
  line-height: 25px;
  color: ${BasicTheme.colors.black};
`;

export const ChangePhotoButton = styled.button`
  margin: 16px auto 10px;
  padding: 7px 19px;
  border-radius: 8px;
  background: ${BasicTheme.colors.secondaryGrey};
  font-family: Open Sans;
  font-size: ${BasicTheme.fonts.ensuing};
  font-weight: 600;
  line-height: 16px;
  color: ${BasicTheme.colors.white};
`;

export const SettingsSaveButton = styled.button`
  margin: 20px auto 21px;
  padding: 5px 43px 9px 44px;
  border-radius: 8px;
  background: ${BasicTheme.colors.generalRed};
  font-family: Open Sans;
  font-size: ${BasicTheme.fonts.primary};
  font-weight: 600;
  line-height: 22px;
  color: ${BasicTheme.colors.white};
`;

export const SettingsPhotoImg = styled.img`
  width: 81px;
  height: 81px;
  border-radius: 100px;
`;