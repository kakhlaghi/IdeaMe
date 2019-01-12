import React from 'react'

const Post = ({post}) => {
    return (
    <div className="tile" key={post.id} >
        <h4>{post.title}</h4>
        <p>{post.body}</p>
    </div>
    )
} 

export default Post