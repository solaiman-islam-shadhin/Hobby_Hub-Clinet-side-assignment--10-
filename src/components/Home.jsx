import React from 'react'
import { Sliders } from './Sliders'
import { useLoaderData } from 'react-router';

export const Home = () => {
  const {groups} = useLoaderData();
  console.log(groups);
  return (
    <div>
     
      <Sliders/>

      <div>
        our gruops: 
      
      </div>
    </div>
  )
}
