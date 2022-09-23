import React from "react";
import Head from "next/head";
import TestComponent from "components/TestComponent";

const Home = () => {
  return (
    <>
      <Head>
        <title>Juan Lopez</title>
      </Head>
      <TestComponent>Hello world</TestComponent>
    </>
  );
};

export default Home;
