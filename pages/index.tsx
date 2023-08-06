import React from "react";
import Head from "next/head";
import About from "components/About";
import Main from "components/Main";

const Home = () => {
  return (
    <>
      <Head>
        <title>Juan Lopez</title>
        <meta
          name="description"
          content="Welcome to my portfolio. I am a passionate and skilled full-stack developer. Explore my projects and experience in building intuitive user interfaces and robust server-side systems. Let's collaborate and bring your ideas to life with innovative and efficient software solutions."
        />
      </Head>
      <Main>
        <About />
      </Main>
    </>
  );
};

export default Home;
