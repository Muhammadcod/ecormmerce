import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
