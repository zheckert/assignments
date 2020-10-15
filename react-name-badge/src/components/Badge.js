import React from "react"

export const Badge = (props) => {
    return(
        <>
        <div className="newFormOutline">
            <p className="badgeHeader">{props.firstName}'s Badge</p>
            <div className="flex">
                <p>{`Name: ${props.firstName} ${props.lastName}`}</p>
                <p>{`Phone: ${props.phone}`}</p>
            </div>
            <div className="flex">
                <p>{`Place of Birth: ${props.placeOfBirth}`}</p>
                <p>{`Favorite Food: ${props.favoriteFood}`}</p>
            </div>
            <div className="flex">
                <p>{`Email: ${props.email}`}</p>
            </div>
            <div className="flex2">
                <p className="outline">{`${props.info}`}</p>
            </div>
        </div>
        </>

       
            
            
            
            
            
            
        
    )
}