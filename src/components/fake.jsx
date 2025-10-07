import { toast } from 'react-toastify';
import React from 'react'
import { ToastContainer } from 'react-toastify';

export const CreatGroups = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const GroupData = Object.fromEntries(formData.entries());
    fetch("https://assignment-10-server-side-woad.vercel.app/createGroup", {
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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Create a New Group</h1>
      <form onSubmit={handleSubmit} className="card bg-base-200 border-r-1 border-t-1 border-base-content shadow-md shadow-base-content p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="text-base-content font-semibold mb-2">Group Name</span>
            </label>
            <input type="text" name="group_name" className=" input w-full  focus:outline-none outline-none border-base-content focus:border-base-content" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="text-base-content font-semibold mb-2">Hobby Category</span>
            </label>
            <select name="category" className="select w-full focus:outline-none outline-none border-base-content focus:ring-0 focus:border-base-content" required placeholder="Select a category">
              <option disabled selected>Select a category </option>
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

          <div className="form-control">
            <label className="label">
              <span className="text-base-content font-semibold mb-2">Meeting Location</span>
            </label>
            <input type="text" name="location" className="input w-full focus:outline-none outline-none border-base-content focus:border-base-content" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="text-base-content font-semibold mb-2">Max Members</span>
            </label>
            <input type="text" min="1" name="max_members" className="input w-full focus:outline-none outline-none border-base-content focus:border-base-content" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="text-base-content font-semibold mb-2">Start Date</span>
            </label>
            <input type="date" name="date" className="input w-full focus:outline-none outline-none border-base-content focus:border-base-content" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="text-base-content font-semibold mb-2">Image URL</span>
            </label>
            <input type="url" name="photo" className="input w-full focus:outline-none outline-none border-base-content focus:border-base-content" placeholder="https://..." />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="text-base-content font-semibold mb-2">User Name</span>
            </label>
            <input type="text" name="name" className="input w-full focus:outline-none outline-none border-base-content focus:border-base-content" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="text-base-content font-semibold mb-2">User Email</span>
            </label>
            <input type="email" name="email" className="input w-full focus:outline-none outline-none border-base-content focus:border-base-content" required />
          </div>
        </div>

        <div className="form-control mt-6">
          <label className="label">
            <span className="text-base-content font-semibold mb-2">Description</span>
          </label>
          <textarea name="description" className="textarea focus:outline-none outline-none border-base-content focus:border-base-content h-24 w-full " required></textarea>
        </div>

        <button type="submit" className="btn  shadow-base-content shadow-sm border-base-content btn-base-content btn-lg mt-8">
          Create Group
        </button>
      </form>
      <ToastContainer />
    </div>
  )
}
