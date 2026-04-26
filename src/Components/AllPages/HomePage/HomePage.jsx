import React from 'react';
import MainContent from './MainContent';
import RightDetails from './RightDetails';
import LeftDetails from './LeftDetails';

const HomePage = () => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
      <aside className="lg:col-span-2">
        <LeftDetails />
      </aside>

      <section className="lg:col-span-6 bg-amber-200">
        <MainContent />
      </section>

      <aside className="lg:col-span-4">
        <RightDetails />
      </aside>
    </main>
  );
};

export default HomePage;
