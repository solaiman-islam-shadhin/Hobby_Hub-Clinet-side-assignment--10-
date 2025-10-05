import React from 'react'
import { Fade } from 'react-awesome-reveal'

export const MyGroups = () => {
  return (
    <div>
      <Fade>
        <h1 className="text-3xl font-bold mb-6">My Groups</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <p>Your created groups will appear here</p>
        </div>
      </Fade>
    </div>
  )
}
