import { CircleUser } from 'lucide-react';
import Link from 'next/link';

const NavigationMenu = () => {
  return (
    <div className="containers pb-2">
      <nav className="text-2xl flex items-center justify-between px-3">
        <div></div>
        <div>
          <ul className="flex items-center gap-4">
            <li>
              <Link className="text-dark1 text-[18px]" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-dark1 text-[18px]" href="#">
                About
              </Link>
            </li>
            <li>
              <Link className="text-dark1 text-[18px]" href="#">
                Career
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <Link href={`/login`}>
            <CircleUser />
          </Link>

          <button className="bg-taupe-800 px-4 py-0.5 text-[18px] text-white capitalize">
            login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavigationMenu;
