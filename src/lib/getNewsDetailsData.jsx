const getNewsDetailsData = async news_id => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${news_id}`,
  );
  return res.json();
};

export default getNewsDetailsData;
