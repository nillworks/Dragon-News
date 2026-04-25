import NavigationMenu from '@/Components/Shared/NavigationMenu';
import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div>
      <NavigationMenu />
      {children}
    </div>
  );
};

export default AuthLayout;
