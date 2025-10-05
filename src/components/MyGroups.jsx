import React, { useContext, useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { AuthContext } from '../Context/AuthContext'
import { Link } from 'react-router'

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

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this group?')) {
      fetch(`http://localhost:5000/groups/${id}`, {
        method: 'DELETE'
      })
      .then(() => {
        setGrpData(grpData.filter(group => group._id !== id))
      })
    }
  }

  return (
    <div>
      <Fade>
        <h1 className="text-3xl font-bold mb-6">My Groups</h1>
        
        {grpData.length === 0 ? (
          <p>No groups created yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
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
                      <div className="flex gap-2">
                        <Link 
                          to={`/dashboard/update-group/${group._id}`}
                          className="btn btn-sm btn-primary"
                        >
                          Update
                        </Link>
                        <button 
                          onClick={() => handleDelete(group._id)}
                          className="btn btn-sm btn-error"
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
