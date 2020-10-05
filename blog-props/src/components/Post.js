import React from "react"

function Post(poop){
    return(
        <div>
            <p>{poop.title}</p>
            <p>{poop.subTitle}</p>
            <p>{poop.author}</p>
            <p>{poop.date}</p>
        </div>
    )
}

export default Post