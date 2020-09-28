import React from "react"
import FriendList from "./components/FriendList"


function App() {
    //You need to 
    const friendLoop = FriendList.map(friends => <FriendList name = {friends.name} age = {friends.age} />)

    return(
        <div>
            {friendLoop}
        </div>
    )
}

export default App