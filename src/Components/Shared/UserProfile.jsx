'use client';

import Image from 'next/image';
import { LogOut, Mail, User } from 'lucide-react';
import { signOut, useSession } from '@/lib/auth-client';

const UserProfile = () => {
  const { data, isPending } = useSession();

  if (isPending) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const user = data?.user;

  if (!user) {
    return <p className="text-center mt-10">No user found</p>;
  }

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-2xl p-6 text-center">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <Image
          src={user?.image || '/default-avatar.png'}
          alt={user?.name || 'user'}
          width={80}
          height={80}
          className="rounded-full border-4 border-gray-200"
        />
      </div>

      {/* Name */}
      <h2 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
        <User size={18} />
        {user?.name || 'No Name'}
      </h2>

      {/* Email */}
      <p className="text-gray-500 flex items-center justify-center gap-2 mt-2">
        <Mail size={16} />
        {user?.email || 'No Email'}
      </p>

      {/* Email Verified */}
      <p
        className={`mt-2 text-sm font-medium ${
          user?.emailVerified ? 'text-green-600' : 'text-red-500'
        }`}
      >
        {user?.emailVerified ? 'Verified ✅' : 'Not Verified ❌'}
      </p>

      {/* Logout Button */}
      <button
        onClick={() => signOut()}
        className="mt-5 w-full cursor-pointer flex items-center justify-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
