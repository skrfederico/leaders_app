import React, { useState, useEffect } from 'react'
import { useController } from '../Controller'

export default function AllGroups() {
  const { getAllGroups, deleteGroup, groups, completeGroup } = useController()

  useEffect(() => {
    if (groups.length < 1) {
      getAllGroups()
    }
  }, [])

  return (
    <div className="allgroups">
      <h1>All Groups</h1>
      {groups.map((group) => {
        return (
          <div key={group._id}>
            <p>{group._id}</p>
            <p>{group.body}</p>
          </div>
        )
      })}
    </div>
  )
}
