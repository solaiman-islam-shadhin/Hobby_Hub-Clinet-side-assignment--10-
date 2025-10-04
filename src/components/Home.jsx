import React from 'react'
import { Sliders } from './Sliders'
import { useLoaderData } from 'react-router';
import { GroupCard } from './GroupCard';

export const Home = () => {
  const groupdata = useLoaderData();
  console.log(groupdata);
  return (
    <div>
     
      <Sliders/>

     <div>
      <h1 className='text-xl md:text-3xl font-bold text-center mt-10'>Featured Groups</h1>
       <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10'>
       {
        groupdata.map(group =><GroupCard key={group._id} group={group}></GroupCard>)
       }
      
      </div>
     </div>
    </div>
  )
}
