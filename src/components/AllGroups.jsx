import React from 'react'
import { Link, useLoaderData } from 'react-router';
import { Slide, Fade } from 'react-awesome-reveal';

export const AllGroups = () => {
    const allgroupdata = useLoaderData();
    return (
        <div>
            <Fade>
                <h1 className='text-3xl font-bold text-center mt-10 mb-5'>All Groups</h1>
            </Fade>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10'>
                {
                    allgroupdata.map((group, index) => (
                        <Slide key={group._id} direction="up" delay={index * 50} triggerOnce>
                            <div className="w-full rounded-md shadow-md bg-base-content hover:shadow-xl transition-shadow">
                                <img src={group.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-xl text-base-200 font-semibold">{group.group_name.toUpperCase()}</h2>
                                        <p className="text-base-200">{"Category: " + group.category}</p>
                                        <p className="text-base-200 truncate">{group.description}</p>
                                    </div>
                                    <Link to={`/GroupDetails/${group._id}`} className="py-4 font-semibold w-full rounded-md bg-base-content border-base-100 btn">
                                        <h1 className='text-base-100 flex justify-center items-center gap-3'>View Details</h1>
                                    </Link>
                                </div>
                            </div>
                        </Slide>
                    ))
                }
            </div>
        </div>
    )
}
