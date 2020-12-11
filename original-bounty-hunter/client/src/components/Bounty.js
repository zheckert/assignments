import React, { useState } from "react"
import { AddBountyForm } from "./AddBountyForm"

export const Bounty = (props) => {
    const { firstName, lastName, living, bountyAmount, isJedi, _id } = props
    const [ editBounty, setEditBounty ] = useState(false)
    return(
        <div>
            { !editBounty?
                <>
                    <h2>{firstName} {lastName}</h2>
                    <h3>Alive: {living}</h3>
                    <h3>Bounty: {bountyAmount} credits</h3>
                    <p>Jedi? {isJedi}</p>
                    <button onClick={() => props.deleteBounty(_id)}>Delete</button>
                    <button onClick={() => setEditBounty(prevEdit => !prevEdit)}>Edit</button>
                </>
            :
                <>
                    <AddBountyForm 
                        firstName={firstName}
                        lastName={lastName}
                        living={living}
                        bountyAmount={bountyAmount}
                        isJedi={isJedi}
                        buttonText="Submit Changes"
                        submit={props.editBounty}
                        _id={_id}
                    />
                    <button onClick={() => setEditBounty(prevEdit => !prevEdit)}>Cancel Changes</button>
                </>
            }
        </div>
    )
}