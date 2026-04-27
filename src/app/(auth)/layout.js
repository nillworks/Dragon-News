import NavigationMenu from '@/Components/Shared/NavigationMenu';

const AuthLayout = ({ children }) => {
  return (
    <>
      <NavigationMenu />
      {children}
    </>
  );
};

export default AuthLayout;
