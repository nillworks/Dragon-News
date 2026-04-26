import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DetailsCard = ({ newsDetailsData }) => {
  console.log(newsDetailsData);

  const {
    _id,
    author = {},
    category_id,
    details,
    image_url,
    others_info = {},
    rating = {},
    thumbnail_url,
    title,
    total_view,
  } = newsDetailsData || {};

  const { name, published_date, img } = author;

  return (
    <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden p-6 font-sans">
      {/* Top Image Section */}
      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden shadow-md">
        <Image
          width={800}
          height={400}
          src={image_url || '/placeholder.jpg'}
          alt={title || 'News background'}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="space-y-4">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight">
          {title}
        </h1>

        {/* Date + Tags */}
        <div className="text-xs text-gray-500 leading-relaxed">
          <span className="font-medium">{published_date || 'No date'}</span>
          <span className="mx-1">|</span>
          <span className="font-semibold text-gray-600">Author:</span>{' '}
          {name || 'Unknown'}
        </div>

        {/* Content */}
        <div className="text-sm text-gray-700 leading-relaxed space-y-4">
          <p>
            <span className="font-bold">{name || 'Unknown Source'} —</span>{' '}
            {details}
          </p>

          {/* Footer Info */}
          <div className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-50">
            <span className="font-medium">{published_date || 'No date'}</span> |
            Views: {total_view || 0}
          </div>

          <p className="text-gray-600 italic">{details}</p>
        </div>

        {/* Back Button */}
        <div className="pt-6">
          <Link
            href={`/category/${category_id}`}
            className="flex items-center gap-2 max-w-max bg-[#d81b4d] hover:bg-[#b0163e] text-white px-6 py-2.5 rounded-md transition-colors text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
