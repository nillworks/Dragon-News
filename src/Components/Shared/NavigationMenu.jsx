import Link from 'next/link';
import NavLink from './NavLink';
import userIcons from '@/assets/user.png';
import Image from 'next/image';

const NavigationMenu = () => {
  return (
    <div className="containers py-5">
      <nav className="text-2xl flex items-center justify-between px-3">
        <div></div>
        <div>
          <ul className="flex items-center gap-4">
            <li>
              <NavLink className="text-dark1 text-[18px]" href="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="text-dark1 text-[18px]" href="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="text-dark1 text-[18px]" href="/career">
                Career
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <Link href={`/register`}>
            <Image width={40} height={40} src={userIcons} alt="icons" />
          </Link>

          <Link
            href={`/login`}
            className="bg-taupe-800 px-4 py-0.5 text-[18px] text-white capitalize"
          >
            login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavigationMenu;
