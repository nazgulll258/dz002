import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Post = () => {
    const [post,setPost] = useState([])
   
    useEffect(() =>{
        const getRequest = async() =>{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            setPost(response.data)
        }
        getRequest()
    },[])
  return (
    <div className="divs-Post">


        
      {post.map((post) =>(
        
        <Link key={post.id} to={`/posts/${post.id}`}>
           <li > {post.title}  </li>
            </Link>
       
      ))}
    
    </div>
  )
}

export default Post
