import React from 'react';
import Navbar from './Navbar';

const Page = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Page;
