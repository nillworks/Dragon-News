import getNewsDetailsData from '@/lib/getNewsDetailsData';
import DetailsCard from './DetailsCard';
import RightDetails from '../HomePage/RightDetails';

const NewsDetails = async ({ paramsId }) => {
  const newsDetailsData = await getNewsDetailsData(paramsId);
  return (
    <div className="flex flex-col lg:flex-row items-start  gap-2 containers">
      <DetailsCard newsDetailsData={newsDetailsData.data[0]} />
      <RightDetails />
    </div>
  );
};

export default NewsDetails;
