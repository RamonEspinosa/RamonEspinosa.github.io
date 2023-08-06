import React from "react";
import styled from "styled-components";
import Welcome from "components/Welcome";
import queries, { breakpoints } from "constants/queries";
import Contact from "components/Contact";
import spacing from "constants/spacing";

const About = () => {
  return (
    <Section>
      <Container>
        <Welcome />
        <Contact />
      </Container>

      <Pic />
    </Section>
  );
};

const Section = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-inline: auto;
  max-width: ${breakpoints.desktopMin}px;
  @media ${queries.laptopAndUp} {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`;

const Pic = styled.div`
  color: white;
  width: min(400px, 90%);
  aspect-ratio: 1/1;
  background-color: white;
  border-radius: 50%;
`;

export default About;
