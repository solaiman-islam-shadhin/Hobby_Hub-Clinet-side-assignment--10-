import React from 'react'

export const CreatGroups = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Create New Group</h1>
      <form className="card bg-base-200 border-l-1 border-base-content shadow-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold mb-2">Group Name</span>
            </label>
            <input type="text" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold mb-2">Hobby Category</span>
            </label>
            <select className="select select-bordered mb-2" required>
              <option value="">Select category</option>
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
            <input type="text" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold mb-2">Max Members</span>
            </label>
            <input type="number" min="1" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold mb-2">Start Date</span>
            </label>
            <input type="date" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold mb-2">Image URL</span>
            </label>
            <input type="url" className="input input-bordered" placeholder="https://..." />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold mb-2">User Name</span>
            </label>
            <input type="text" value="John Doe" className="input input-bordered" readOnly />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold mb-2">User Email</span>
            </label>
            <input type="email" value="john.doe@example.com" className="input input-bordered" readOnly />
          </div>
        </div>

        <div className="form-control mt-6">
          <label className="label">
            <span className="label-text font-semibold mb-2">Description</span>
          </label>
          <textarea className="textarea textarea-bordered h-24 w-full " required></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-lg mt-8">
          Create Group
        </button>
      </form>
    </div>
  )
}
