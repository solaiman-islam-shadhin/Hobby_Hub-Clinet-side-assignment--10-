import React, {  useState } from 'react'
import { useLoaderData } from 'react-router'

export const GroupDetails = () => {
    const groupdata = useLoaderData();
    const [datedata,setDatedata]=useState(true);
    const { group_name, category, location, description, max_members, date, name, email, photo } = groupdata;
    const currentdate = new Date().toISOString().split('T')[0]; 
    
    if(currentdate>date && datedata){
        setDatedata(false);
        return;
    }
  
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="card bg-base-100 shadow-xl text-base-content rounded-lg mb-8">
                <div className="hero-content text-center ">
                    <div>
                          <div className="avatar w-52 my-5 ">
                                
                                    <img className='rounded-full' src={photo || '/default-avatar.png'} alt={name} />
                                
                            </div>
                        <h1 className="text-5xl font-bold mb-2">{group_name.toUpperCase()}</h1>
                        <p className="text-xl mt-2">{category}</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">📝 Description</h2>
                            <p className="text-lg">{description}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h3 className="card-title">📍 Location</h3>
                                <p>{location}</p>
                            </div>
                        </div>
                        
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h3 className="card-title">👥 Max Members</h3>
                                <p>{max_members} people</p>
                            </div>
                        </div>
                        
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h3 className="card-title">📅 Start Date</h3>
                                <p>{date}</p>
                            </div>
                        </div>
                        
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h3 className="card-title">🏷️ Category</h3>
                                <p>{category}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body text-center">
                            <h3 className="card-title justify-center">👤 Group Leader</h3>
                          
                            <h4 className="text-xl font-semibold">{name}</h4>
                            <p className="text-sm opacity-70">{email}</p>
                        </div>
                    </div>
                    
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">{
                            datedata ? <button className="btn btn-accent btn-lg w-full">Join Group</button> : <button disabled className="btn btn-accent btn-lg w-full ">NO Longer Active</button>}
                            
                            <button className="btn btn-outline w-full mt-2">Contact Leader</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
