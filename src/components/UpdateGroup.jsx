import React from 'react'

export const UpdateGroups = () => {
const handleSubmit = (e) => {
    e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  form.reset();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Create New Group</h1>
      <form onSubmit={handleSubmit} className="card bg-base-200 border-l-1 border-base-content shadow-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text font-semibold mb-2">Group Name</span>
            </label>
            <input type="text" name="group_name" className=" input  focus:outline-none outline-none border-base-content focus:border-base-content" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold mb-2">Hobby Category</span>
            </label>
            <select name="category" className="select focus:outline-none outline-none border-base-content focus:ring-0 focus:border-base-content" required>
              <option>Select a category</option>
              <option>Drawing & Painting</option>
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
              <span className="label-text font-semibold mb-2">Meeting Location</span>
            </label>
            <input type="text" name="location" className="input focus:outline-none outline-none border-base-content focus:border-base-content" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold mb-2">Max Members</span>
            </label>
            <input type="text" min="1" name="max_members" className="input focus:outline-none outline-none border-base-content focus:border-base-content" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold mb-2">Start Date</span>
            </label>
            <input type="date" name="date" className="input focus:outline-none outline-none border-base-content focus:border-base-content" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold mb-2">Image URL</span>
            </label>
            <input type="url" name="photo" className="input focus:outline-none outline-none border-base-content focus:border-base-content" placeholder="https://..." />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold mb-2">User Name</span>
            </label>
            <input type="text" name="name"  className="input focus:outline-none outline-none border-base-content focus:border-base-content" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold mb-2">User Email</span>
            </label>
            <input type="email" name="email" className="input focus:outline-none outline-none border-base-content focus:border-base-content" required />
          </div>
        </div>

        <div className="form-control mt-6">
          <label className="label">
            <span className="label-text font-semibold mb-2">Description</span>
          </label>
          <textarea name="description" className="textarea focus:outline-none outline-none border-base-content focus:border-base-content h-24 w-full " required></textarea>
        </div>

        <button type="submit" className="btn  shadow-base-content shadow-sm border-base-content btn-base-content btn-lg mt-8">
          Create Group
        </button>
      </form>
    </div>
  )
}
