import axios from 'axios';
import React, { useState } from 'react'


export const Apidemo3 = () => {
  const [comments, setcomments] = useState([])
  const getcomments = async () => {
    const response = await axios.get("https://dummyjson.com/comments");
    console.log(response.data.comments);

    setcomments(response.data.comments)

  }


  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Apidemo3</h1>
      <button onClick={getcomments}>Get</button>
      <table className='table table-danger'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Fullname</th>
            <th>Comment</th>
            <th>PostId</th>
            <th>Likes</th>
            <th>UserId</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {
            comments.map((comment) => {
              return <tr>
                <td>{comment.id}</td>
                <td>{comment.user.fullName}</td>
                <td>{comment.body}</td>
                <td>{comment.postId}</td>
                <td>{comment.likes}</td>
                <td>{comment.user.id}</td>
                <td>{comment.user.username}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
