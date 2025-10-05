import React, { useContext, useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { AuthContext } from '../Context/AuthContext'
import { Link } from 'react-router'
import Swal from 'sweetalert2'

export const MyGroups = () => {
  const { user } = useContext(AuthContext)
  const [grpData, setGrpData] = useState([])

  useEffect(() => {
    if (user && user.email) {
      fetch(`http://localhost:5000/my-groups/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setGrpData(data)
        })
    }
  }, [user])

const handleUpdate =() =>{

}


  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/group/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id })
        })
          .then(() => {
            setGrpData(grpData.filter(group => group._id !== id))
          })


        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }



  return (
    <div>
      <Fade>
        <h1 className="text-3xl font-bold mb-6">My Groups</h1>

        {grpData.length === 0 ? (
          <p>No groups created yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full table-xs sm:table-sm md:table-md">
              <thead>
                <tr>
                  <th>Group Name</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Members</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {grpData.map((group) => (
                  <tr key={group._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={group.photo} alt={group.group_name} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{group.group_name}</div>
                          <div className="text-sm opacity-50">{group.description?.substring(0, 50)}...</div>
                        </div>
                      </div>
                    </td>
                    <td>{group.category}</td>
                    <td>{group.location}</td>
                    <td>{group.max_members}</td>
                    <td>
                      <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                        <Link
                          to={`/dashboard/update-group/${group._id}`}
                          className="btn btn-xs sm:btn-sm btn-primary"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => handleDelete(group._id)}
                          className="btn btn-xs sm:btn-sm btn-error"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Fade>
    </div>
  )
}
