import { toast } from 'react-toastify';
import React, { useContext } from 'react'
import { ToastContainer } from 'react-toastify';
import { Fade, Zoom } from 'react-awesome-reveal';
import { AuthContext } from '../Context/AuthContext';

export const CreatGroups = () => {
const {user,userdata}=useContext(AuthContext)
console.log(user)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const GroupData = Object.fromEntries(formData.entries());
    fetch("http://localhost:5000/createGroup", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(GroupData)
    })
      .then(res => res.json())
      .then(data => {
       if(data.insertedId){

         toast.success("Group Created Successfully");
       }
       else{
         toast.error("Failed to create group");
       }
      })
    form.reset();
  };

  return (
    <div className="container mx-auto p-6">
      <Fade>
        <div className=" w-full  text-base-content rounded-lg mb-8">
          <div className=" py-5 text-center">
            <div>
              <h1 className="text-5xl text-center font-bold">Create New Group</h1>
              <p className="text-xl text-center mt-2">Start your hobby community today</p>
            </div>
          </div>
        </div>
      </Fade>

      <Fade>
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">📝 Group Name</h3>
              <input type="text" name="group_name" className="input w-full  focus:outline-none outline-none border-base-content focus:border-base-content" required />
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">🏷️ Hobby Category</h3>
              <select name="category" className="select w-full focus:outline-none outline-none border-base-content focus:ring-0 focus:border-base-content" required>
                <option disabled selected>Select a category</option>
                <option>Drawing & Painting</option>
                <option>Hiking</option>
                <option>Traveling</option>
                <option>Music</option>
                <option>Dancing</option>
                <option>Gardening</option>
                <option>Crafting</option>
                <option>Photography</option>
                <option>Video Gaming</option>
                <option>Fishing</option>
                <option>Running</option>
                <option>Cooking</option>
                <option>Reading</option>
                <option>Writing</option>
              </select>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">📍 Meeting Location</h3>
              <input type="text" name="location" className="input w-full  focus:outline-none outline-none border-base-content focus:border-base-content" required />
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">👥 Max Members</h3>
              <input type="number" min="1" name="max_members" className="input w-full  focus:outline-none outline-none border-base-content focus:border-base-content" required />
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">📅 Start Date</h3>
              <input type="date" name="date" className="input w-full  focus:outline-none outline-none border-base-content focus:border-base-content" required />
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">🖼️ Image URL</h3>
              <input type="url" name="photo" className="input w-full  focus:outline-none outline-none border-base-content focus:border-base-content" placeholder="https://..." />
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">👤 User Name</h3>
              <input type="text" name="name" value={user.displayName || userdata.name} className="input w-full  focus:outline-none outline-none border-base-content focus:border-base-content" required readOnly />
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">📧 User Email</h3>
              <input type="email" value={user.email} name="email" className="input w-full  focus:outline-none outline-none border-base-content focus:border-base-content" required readOnly />
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl mt-6">
          <div className="card-body">
            <h3 className="card-title">📝 Description</h3>
            <textarea name="description" className="textarea focus:outline-none outline-none border-base-content focus:border-base-content h-24 w-full" required></textarea>
          </div>
        </div>

          <button type="submit" className="py-3 hover:border-b-1 cursor-pointer font-semibold w-full card bg-base-100 shadow-xl btn-lg mt-8">
            Create Group
          </button>
        </form>
      </Fade>
      <ToastContainer />
    </div>
  )
}
