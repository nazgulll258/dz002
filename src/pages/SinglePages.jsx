import axios from "axios"
import { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"

const SinglePages = () => {
    
    const {id} = useParams()
   
    const [post,setPost] = useState(null)
    useEffect(() =>{
        const getRequest = async() =>{
            const response = await axios.get(`https://dummyjson.com/posts/${id}`)
            setPost(response.data)
        }
        getRequest()
    },[id])
  return (
    <div>
      {post&&(
        <> 
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        </>
       
      )}
    </div>
  )
}

export default SinglePages
