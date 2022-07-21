import React from 'react';
import { NextPage } from 'next';

const ServerErrorPage: NextPage = () => {
  return (
    <>
      <h1>Server Error</h1>
      <p>Oops, somewthing went wrong.</p>
    </>
  );
};

export default ServerErrorPage;