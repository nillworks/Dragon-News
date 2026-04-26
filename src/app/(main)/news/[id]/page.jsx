import NewsDetails from '@/Components/AllPages/DetailsPage/NewsDetails';

const NewsPage = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <NewsDetails paramsId={id} />
    </div>
  );
};

export default NewsPage;
