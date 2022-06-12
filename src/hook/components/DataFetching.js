// React Hooks Tutorial-12-Fetching data with useEffect 

import axios from 'axios'
import React, { useEffect } from 'react'

function DataFetching() {

    const [posts, setPosts] = useEffect([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })
  return (
    <div>
        <ul>
        {
            posts.map(post => <li key={post.id}>{post.title}</li>)
        }
        </ul>
    </div>
  )
}

export default DataFetching