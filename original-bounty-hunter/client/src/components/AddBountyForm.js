import React, { useState } from "react"

export const AddBountyForm = (props) => {
    const initialInputs = { 
        firstName: props.firstName || "", 
        lastName: props.lastName || "", 
        living: props.living || true, 
        bountyAmount: props.bountyAmount || 0, 
        isJedi: props.bountyAmount || false
    }
    const [inputs, setInputs] = useState(initialInputs)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submit(inputs, props._id)
        if(props.buttonText === "Submit Changes"){
            props.setEditBounty(prevEdit => !prevEdit)
        }
        setInputs(initialInputs)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="Target's first name?"
            />
            <input 
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Target's last name?"
            />
        {/* <input 
                type=""
                name="living"
                value={inputs.living}
                onChange={handleChange}
                placeholder="Is person currently alive?"
            /> */}
            <input 
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder="How much should their bounty be?"
            />
        {/* <input 
                type=""
                name="isJedi"
                value={inputs.isJedi}
                onChange={handleChange}
                placeholder="Is this person a jedi?"
            /> */}
            <button>{ props.buttonText }</button>
        </form>
    )
}