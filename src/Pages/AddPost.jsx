import React from 'react'
import { Container } from '../compoent/index'
import {PostForm} from "../compoent/index.js"

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost;