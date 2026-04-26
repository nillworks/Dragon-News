import Link from 'next/link';
import React from 'react';

const CategoryList = ({ category, isActive }) => {
  const Active = String(category.category_id) === String(isActive);
  return (
    <Link
      href={`/category/${category.category_id}`}
      className={`block px-4 py-2 rounded-md text-gray-600 hover:bg-gray-200 transition ${Active && 'bg-gray-200 '}`}
    >
      {category.category_name}
    </Link>
  );
};

export default CategoryList;
