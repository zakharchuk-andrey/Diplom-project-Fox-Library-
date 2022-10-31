import styled from "styled-components";
import { config } from "../Config/ConfigText";
import { BasicTheme } from "../Config/Config";

export const EmptyBlockList = () => {
  return (
    <Wrapper>
      <EmptyDescritionBlockList>
      {config.heading.titleBlocListBookText}
      </EmptyDescritionBlockList>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  margin: 133px auto;
`;
export const EmptyDescritionBlockList = styled.h2`
  text-align: center;
  font-family: Open Sans;
  font-size: ${BasicTheme.fonts.side};
  font-weight: 600;
  line-height: 33px;
  color:${BasicTheme.colors.secondaryGrey};
`;
