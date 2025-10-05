import { toast } from 'react-toastify';
import React, { useContext } from 'react'
import { ToastContainer } from 'react-toastify';
import { Fade, Zoom } from 'react-awesome-reveal';
import { AuthContext } from '../Context/AuthContext';
import { useLoaderData } from 'react-router';

export const UpdateGroup = () => {
  const userData = useLoaderData();
 
  const { user, userdata } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const GroupData = Object.fromEntries(formData.entries());
    fetch(`http://localhost:5000/group-details/${userData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(GroupData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
         
        if (data.modifiedCount) {

          toast.success("Group update Successfully");
        }
        else {
          toast.error("Update Something");
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
                <input type="text" name="group_name" defaultValue={userData.group_name} className="input w-full  focus:outline-none outline-none border-base-content focus:border-base-content" required />
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">🏷️ Hobby Category</h3>
                <select name="category" defaultValue={userData.category}  className="select w-full focus:outline-none outline-none border-base-content focus:ring-0 focus:border-base-content" required>
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
                <input type="text" name="location" defaultValue={userData.location} className="input w-full  focus:outline-none outline-none border-base-content focus:border-base-content" required />
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">👥 Max Members</h3>
                <input type="number" min="1" name="max_members" defaultValue={userData.max_members} className="input w-full  focus:outline-none outline-none border-base-content focus:border-base-content" required />
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">📅 Start Date</h3>
                <input type="date" name="date" defaultValue={userData.date} className="input w-full  focus:outline-none outline-none border-base-content focus:border-base-content" required />
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">🖼️ Image URL</h3>
                <input type="url" name="photo" defaultValue={userData.photo} className="input w-full  focus:outline-none outline-none border-base-content focus:border-base-content" placeholder="https://..." />
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
              <textarea name="description" defaultValue={userData.description} className="textarea focus:outline-none outline-none border-base-content focus:border-base-content h-24 w-full" required></textarea>
            </div>
          </div>

          <button type="submit" className="py-3 hover:border-b-1 cursor-pointer font-semibold w-full card bg-base-100 shadow-xl btn-lg mt-8">
            Update Group
          </button>
        </form>
      </Fade>
      <ToastContainer />
    </div>
  )
}
