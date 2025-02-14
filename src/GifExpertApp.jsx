import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [category, setCategory]=useState(["One Punch"]);
  const onAddCategory=(valor)=>{
    if(category.includes(valor)) return;
    setCategory([valor,...category]);
  }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
          onNewCategory={onAddCategory}
        />
        {category.map((category)=>(
            /*<li key={item}>{item.toUpperCase()}</li>*/
            <GifGrid key={category} category={category.toUpperCase()}/>
        ))}
    </>
  )
}
