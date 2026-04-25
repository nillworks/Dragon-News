import logo from '@/assets/logo.png';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div className="containers">
        <Image src={logo} alt="logo Header" className="mx-auto" />
      </div>
    </header>
  );
};

export default Header;
