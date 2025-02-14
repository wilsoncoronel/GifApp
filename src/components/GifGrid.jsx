import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem';


export const GifGrid = ({category}) => {

  const [images, setImages]=useState([]);

  const getImages = async()=>{
    const newImages= await getGifs(category);
    setImages(newImages);
  }
  console.log(images);
  useEffect(()=>{//evita que se reejecute cada que escribimos en el cuadro de texto y damos enter
    getImages();
  },[]);
  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
      {
        images.map((image)=>(
          <GifItem 
            key={image.id}
            {...image}
          />
        ))
      }
      </div>
    </>
  )
}
