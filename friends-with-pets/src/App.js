import React from "react"
import Friend from "./components/Friend"
import friends from "./components/FriendList"

function App() {
    
    const friendLoop = friends.map(friend => <Friend name = {friend.name} age = {friend.age} allPets = {friend.pets}/>)

    return(
        <div>
            {friendLoop}
        </div>
    )
}

export default App