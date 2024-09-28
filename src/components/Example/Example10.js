import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Example10() {
    const[post,setPost]=useState([])
    const[id,setId]=useState(1)
    const [bt,setBt]=useState(1)

    useEffect(()=>
    {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>
        {
            setPost(res.data)
            console.log(res)
        }
        ).catch(err=>
            console.log(err)
        )
    },[bt]
    )
    const handle=()=>{
        setBt(id)
    }
  return (
    <div>

        <input type='text' onChange={e=>setId(e.target.value)}/>
        <button type='submit' onClick={handle}>clike</button>
        <h2>{post.title}</h2>
        {/* <ul>
            {
                posts.map((post)=>(
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul> */}
    </div>
  )
}

export default Example10
