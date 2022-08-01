import React from 'react'
import Post from './Post'
import './styles/postContainer.css'

export const PostsContainer = () => {
  return (
    <div className='postContainer'>
        <Post/>
        <Post/>

        <Post/>
        <Post/>

    </div>
  )
}
