import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components/';

export const GiffyApp = () => {
  const [categories, setCategories] = useState(['HunterxHunter']);
  console.log(categories);
  const addCategoryHandler = (category) => {
    if (categories.includes(category)) return;

    setCategories((categories) => [category, ...categories]);
  };

  return (
    <>
      <h1>Giffy App</h1>

      <AddCategory onAddCategory={addCategoryHandler} />
      <button onClick={addCategoryHandler}>Agregar</button>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
