import logo from '@/assets/logo.png';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="containers flex flex-col items-center justify-center text-center gap-2 py-4 px-3">
      <div className="">
        <Image src={logo} alt="logo Header" className="mx-auto" />
      </div>

      <div className=" space-y-2">
        <h2 className="text-dark1">Journalism Without Fear or Favour</h2>
        <h3 className="text-dark1">
          <span className="text-dark2 font-medium">Sunday</span>, November 27,
          2025
        </h3>
      </div>
    </header>
  );
};

export default Header;
