import { LogOut } from 'lucide-react';

const LogoutButton = () => {
  return (
    <button className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md shadow-sm transition duration-200">
      <LogOut size={14} />
      <span className="text-sm">Logout</span>
    </button>
  );
};

export default LogoutButton;
