import HomePage from '@/Components/AllPages/HomePage/HomePage';
import React from 'react';

const CategoryDetailsPage = async ({ params }) => {
  const { id } = await params;

  return (
    <section className="containers">
      <HomePage paramsId={id} />
    </section>
  );
};

export default CategoryDetailsPage;
