import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpert = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([...categories, category]);
  };

  return (
    <>
      <h1>Gifs</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map((category, idx) => (
        <GifGrid key={idx} category={category} />
      ))}
    </>
  );
};
