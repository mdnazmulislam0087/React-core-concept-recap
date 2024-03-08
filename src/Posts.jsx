import { useEffect } from "react"
import { useState } from "react"

export default function Posts(){

    // create a state to Store the data
    const [posts, setPosts] = useState([])
    // Create use effect with no dependencies
    useEffect(()=>{
        // use fetch to load data
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        //
        .then (data => setPosts(data))

    },[])



    return (
        <div className="">
            <h3>Posts: {posts.length}</h3>
        </div>
    )
}