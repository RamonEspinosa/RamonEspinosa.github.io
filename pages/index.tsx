import React from "react";
import Head from "next/head";
import Intro from "components/Intro";
import Main from "components/Main";

const Home = () => {
  return (
    <>
      <Head>
        <title>Juan Lopez</title>
        <meta
          name="description"
          content="Welcome to my portfolio. I am a passionate and skilled front-end developer. Let's collaborate and bring your ideas to life with innovative and efficient software solutions."
        />
      </Head>
      <Main>
        <Intro />
      </Main>
    </>
  );
};

export default Home;
