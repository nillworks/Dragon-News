import MainContentCard from './MainContentCard';
import getNewsByCategoryId from './../../../lib/getNewsByCategoryId';

const MainContent = async ({ paramsId }) => {
  const filterCategoryData = await getNewsByCategoryId(paramsId);

  return (
    <div className="flex flex-col gap-4">
      {filterCategoryData.data.map(item => (
        <MainContentCard key={item._id} data={item} />
      ))}
    </div>
  );
};

export default MainContent;
