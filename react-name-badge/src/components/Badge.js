import React from "react"

export const Badge = (props) => {
    return(
        //style me laterrrrr!!!
        <div>
            <p>{`Name: ${props.firstName} ${props.lastName}`}</p>
            <p>{`Email: ${props.email}`}</p>
            <p>{`Place of Birth: ${props.placeOfBirth}`}</p>
            <p>{`Phone: ${props.phone}`}</p>
            <p>{`Favorite Food: ${props.favoriteFood}`}</p>
            <p>{`${props.info}`}</p>
        </div>
    )
}