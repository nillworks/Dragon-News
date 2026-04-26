import React from 'react';
import MainContent from './MainContent';
import RightDetails from './RightDetails';
import LeftDetails from './LeftDetails';

const HomePage = ({ paramsId }) => {
  return (
    <main className="grid items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 px-3">
      <aside className="lg:col-span-2">
        <LeftDetails paramsId={paramsId} />
      </aside>

      <section className="lg:col-span-6">
        <MainContent paramsId={paramsId} />
      </section>

      <aside className="lg:col-span-4">
        <RightDetails />
      </aside>
    </main>
  );
};

export default HomePage;
