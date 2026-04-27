import BreakingNews from '@/Components/Shared/BreakingNews';
import Header from './../../Components/Shared/Header';
import NavigationMenu from '@/Components/Shared/NavigationMenu';
const MainLayout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <BreakingNews />
        <NavigationMenu />
      </div>
      {children}
    </>
  );
};

export default MainLayout;
