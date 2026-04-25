import Header from '@/Components/Shared/Header';
import NavigationMenu from '@/Components/Shared/NavigationMenu';
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <NavigationMenu />

      {children}
    </>
  );
};

export default MainLayout;
