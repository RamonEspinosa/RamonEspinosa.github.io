import React from "react";
import Head from "next/head";
import styled from "styled-components";
import colors from "constants/colors";
import About from "components/About";

const Home = () => {
  return (
    <>
      <Head>
        <title>Juan Lopez</title>
      </Head>
      <Main>
        <About />
      </Main>
    </>
  );
};

const Main = styled.main`
  height: 100%;
  background-color: ${colors.black};
`;

export default Home;
