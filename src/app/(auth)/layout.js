import NavigationMenu from '@/Components/Shared/NavigationMenu';

const AuthLayout = ({ children }) => {
  return (
    <div>
      <NavigationMenu />
      {children}
    </div>
  );
};

export default AuthLayout;
