import React, { createContext, useContext, useEffect, useState } from 'react'
import groupService from './services/GroupService'
//2) this is where we create context
const ControllerContext = createContext({})

//3) we wrap that context around any children that are "passed" l7 to the provider
export function ProvideController({ children }) {
  //what this provider is doing is providing the context
  // const provider = controller();
  const provider = useHook()
  return (
    //4) this value is where the context comes from
    <ControllerContext.Provider value={provider}>
      {children}
    </ControllerContext.Provider>
  )
}

export const useController = () => {
  return useContext(ControllerContext)
}

// 1)whatever we are doimg here is going to be available because of context
// function controller() {
function useHook() {
  const [groups, setGroups] = useState([])

  function createGroup(group) {
    groupService.createGroup(group)
  }

  async function getAllGroups() {
    try {
      const results = await groupService.getAllGroups()
      setGroups(results)
    } catch (error) {
      console.error(error)
    }
  }

  async function getSingleGroup(id) {
    try {
      const results = await groupService.getOneGroup(id)
      setGroups(results)
      return results
    } catch (error) {
      console.error(error)
    }
  }

  async function updateGroup(id, group) {
    try {
      const results = await groupService.updateGroup(id, group)
      return results
      // setGroups(results)
    } catch (error) {
      console.log(error)
    }
  }
  async function deleteGroup(id) {
    try {
      const results = await groupService.deleteGroup(id)
      setGroups(results)
    } catch (error) {
      console.log(error)
    }
  }
  return {
    createGroup,
    groups,
    getAllGroups,
    getSingleGroup,
    updateGroup,
    deleteGroup
  }
}
