import getCategories from '@/lib/getCategories';
import React from 'react';
import CategoryList from './CategoryList';
import BottomContent from './BottomContent';

const leftDetails = async ({ paramsId }) => {
  const categories = await getCategories();
  const newsCategory = categories.data.news_category;

  return (
    <section className="max-w-[300px]">
      <div>
        <h2 className="text-lg font-medium text-dark2">All Category</h2>
      </div>

      {/* category List */}
      <div className="space-y-3">
        {newsCategory.map(category => (
          <CategoryList
            key={category.category_id}
            category={category}
            isActive={paramsId}
          />
        ))}
      </div>

      <div>
        <BottomContent />
      </div>
    </section>
  );
};

export default leftDetails;
