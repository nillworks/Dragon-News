import getCategories from '@/lib/getCategories';
import React from 'react';
import CategoryList from './CategoryList';

const leftDetails = async () => {
  const categories = await getCategories();
  const newsCategory = categories.data.news_category;
  console.log(newsCategory);

  return (
    <section>
      <div>
        <h2 className="text-lg font-medium text-dark2">All Category</h2>
      </div>

      {/* category List */}
      <div>
        {newsCategory.map(category => (
          <CategoryList
            key={category.category_id}
            category={category}
            isActive={'01'}
          />
        ))}
      </div>
    </section>
  );
};

export default leftDetails;
