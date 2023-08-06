import colors from "constants/colors";
import font from "constants/font";
import queries from "constants/queries";
import spacing from "constants/spacing";
import React from "react";
import styled from "styled-components";

const Welcome = () => {
  return (
    <WelcomeImpl>
      <MainTitle>
        Welcome!
        <Name>I am Juan</Name>
      </MainTitle>
      <Description>A senior full-stack developer</Description>
    </WelcomeImpl>
  );
};

const WelcomeImpl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  gap: ${spacing.lg};
  @media ${queries.laptopAndUp} {
    text-align: start;
  }
`;

const MainTitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: ${font.size[20]};
  color: ${colors.gray[400]};
  line-height: 1;
  gap: ${spacing.xxs};
  @media ${queries.laptopAndUp} {
    font-size: ${font.size[40]};
  }
`;

const Name = styled.span`
  font-weight: 700;
  display: block;
  letter-spacing: -0.2px;

  font-size: ${font.size[48]};
  color: ${colors.white};
  @media ${queries.laptopAndUp} {
    font-size: ${font.size[96]};
  }
`;

const Description = styled.span`
  font-weight: 300;
  letter-spacing: 0.4px;
  color: ${colors.white};
  line-height: 1;
  @media ${queries.laptopAndUp} {
    font-size: ${font.size[32]};
  }
`;

export default Welcome;
