import { Avatar } from '@heroui/react';
import LogoutButton from './LogoutButton';
import Link from 'next/link';

const UserAvatar = ({ userData }) => {
  return (
    <div className="flex items-center gap-4">
      {/* Avatar with Link */}
      <Link href="/userprofile">
        <Avatar className="cursor-pointer">
          <Avatar.Image alt={userData?.name} src={userData?.image} />
          <Avatar.Fallback>
            {userData?.name?.slice(0, 2).toUpperCase()}
          </Avatar.Fallback>
        </Avatar>
      </Link>
    </div>
  );
};

export default UserAvatar;
