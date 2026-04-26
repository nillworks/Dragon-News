const getNewsByCategoryId = async category_id => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  return res.json();
};

export default getNewsByCategoryId;
