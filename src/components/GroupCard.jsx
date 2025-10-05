import React from 'react'
import { Link } from 'react-router';

//group_name, category, location, description, max_members, date, name, email, photo

export const GroupCard = ({ group }) => {
    const {_id, group_name, category,  description,  photo } = group;
    return (
        <div>
            <div className="w-full rounded-md shadow-md bg-base-content">
                <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-xl text-base-200 font-semibold ">{group_name.toUpperCase()}</h2>
                        <p className=" text-base-200">{"Category: " + category}</p>
                        <p className=" text-base-200 truncate">{description}</p>
                    </div>
                   <Link to={`/groupdetails/${_id}`} className="  py-4 font-semibold w-full  rounded-md bg-base-content border-base-100 btn">
                   <h1 className='text-base-100  flex justify-center items-center gap-3 '>View Details </h1>
                   </Link>
                </div>
            </div>
        </div>
    )
}
