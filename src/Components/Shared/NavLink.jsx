'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
  const pthName = usePathname();
  const isActive = href === pthName;

  return (
    <Link
      className={`text-dark1 text-[18px] ${isActive ? 'border-b-2 border-primaryColor' : ''}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
