import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { AiFillStar } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const MainContentCard = ({ data }) => {
  const {
    _id,
    author = {},
    details,
    image_url,
    rating = {},
    title,
    total_view,
  } = data || {};

  const { name, published_date, img } = author;
  const { number } = rating;

  return (
    <div className="max-w-xl mx-auto border border-[#ddd] rounded-md overflow-hidden bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-50">
        <div className="flex items-center gap-3">
          <Image
            src={img || image_url}
            alt="Author"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <h4 className="font-bold text-gray-800 text-sm">
              {name || 'Unknown Author'}
            </h4>
            <p className="text-xs text-gray-500">
              {published_date || 'No date'}
            </p>
          </div>
        </div>

        <div className="flex gap-2 text-xl text-gray-600 cursor-pointer">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
          {title}
        </h2>

        <div className="mb-4">
          <Image
            src={image_url}
            alt="News"
            width={800}
            height={400}
            className="w-full h-auto rounded-md object-cover"
          />
        </div>

        <p className="text-sm text-gray-600 line-clamp-3 mb-2">{details}</p>

        <Link
          href={`/news/${_id}`}
          className="text-orange-500 font-semibold text-sm hover:underline"
        >
          Read More
        </Link>
      </div>

      <hr className="mx-4" />

      {/* Footer */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-1">
          <div className="flex text-orange-400 text-lg">
            <AiFillStar />
          </div>
          <span className="text-sm font-medium text-gray-600 ml-1">
            {number || 0}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span className="text-sm">{total_view || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default MainContentCard;
