import React from "react"
import Pets from "./components/Pets"
import Friend from "./components/Friend"
import friends from "./components/FriendList"


function App() {
    //How do I get <Friend /> and <Pets /> in here so they work in the loop?
    const friendLoop = friends.map(friends => <Friend name = {friends.name} age = {friends.age} pet = {<Pets />}/>)

    return(
        <div>
            {friendLoop}
        </div>
    )
}

export default App