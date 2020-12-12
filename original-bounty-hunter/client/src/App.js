import React, {useState, useEffect } from "react"
import axios from "axios"

//build an index.js file to handle import/export of components

import { Bounty } from "./components/Bounty"
import { AddBountyForm } from "./components/AddBountyForm"

export const App = () => {
  const[ bounties, setBounties ] = useState([])

  const getBounties = () => {
    axios.get("/bounty")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
  }, [])

  const addBounty = (newBounty) => {
    axios.post("/bounty", newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])})
      .catch(error => console.log(error))
  }

  const deleteBounty = (bountyId) => {
    axios.delete(`/bounty/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }

  const editBounty = (edits, bountyId) => {
    axios.put(`/bounty/${bountyId}`, edits)
    .then(res => {setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))})
    .catch(err => console.log(err))
  }

  return(
    <div>
      < AddBountyForm 
        submit={addBounty} 
        buttonText="Add Bounty"
      />
      { bounties.map(bounty => <Bounty
        {...bounty} 
        key={bounty._id} 
        deleteBounty={deleteBounty} 
        editBounty={editBounty}
      />) }
    </div>
  )
}