import React from "react"
import blogContent from "../blogContent"
import Post from "./Post"

function BlogPost(){
//The below code works but isn't "Reacty"
// const blogData = blogContent.map(posts => <div><p>{posts.title}</p><p>{posts.subTitle}</p><p>{posts.author}</p><p>{posts.date}</p></div>)

const blogData = blogContent.map(posts => <Post title = {posts.title} subTitle = {posts.subTitle} author = {posts.author} date = {posts.date}/>)

    return(
        <div>
            <p>{blogData}</p>
        </div>
    )
}

export default BlogPost

