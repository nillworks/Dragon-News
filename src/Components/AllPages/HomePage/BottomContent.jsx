import React from 'react';
import { CiCalendar } from 'react-icons/ci';

const BottomContent = () => {
  // Mock data for the cards
  const newsItems = [
    {
      id: 1,
      image:
        'https://cdn1.wionews.com/prod/wion/images/2025/20250621/image-1750476605928.png',
      category: 'Sports',
      date: 'Jan 4, 2022',
      title: 'Bayern Slams Authorities Over Flight Delay to Club World Cup',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop',
      category: 'Sports',
      date: 'Jan 4, 2022',
      title: 'Football Match Action Moment',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop',
      category: 'Sports',
      date: 'Jan 4, 2022',
      title: 'Stadium Crowd During Game',
    },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-sm">
      {newsItems.map(item => (
        <div
          key={item.id}
          className="flex flex-col gap-3 pb-4 border-b last:border-0 border-gray-200"
        >
          {/* Image Section */}
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <img
              src={item.image}
              alt="News"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 leading-tight mb-3 cursor-pointer hover:text-blue-600 transition">
              {item.title}
            </h3>

            <div className="flex items-center gap-4 text-gray-500 text-sm font-medium">
              <span>{item.category}</span>
              <div className="flex items-center gap-1">
                <CiCalendar className="text-lg" />
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BottomContent;
