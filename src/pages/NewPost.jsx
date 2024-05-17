import axios from "axios"
import { useState } from "react"
import '../App.css'
import { useNavigate } from "react-router-dom"

const NewPost = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')

    const navigate = useNavigate()

    const goPosts  = () => navigate('/posts', {replae:true})
    

    const PostRequest = async(event) =>{
        
            event.preventDefault()
        try {
            const todos = {
                title:title,
                body:body

            }
             await axios.post(`https://dummyjson.com/posts`,todos)
        } 
       
        catch (error) {
            console.error("error" ,error);
        }
         setBody('')
        setTitle('')
        goPosts()
        
       
    }

  return (
    <div className="div-Post" >
        <form  style={{display:'flex',flexDirection:'column'}}onSubmit={PostRequest}>
         <input
         value={title}
         onChange={e =>{
            setTitle(e.target.value)
         }}

         />
         <textarea 
         value={body}
         onChange={e =>{
           setBody(e.target.value)
         }}
         rows="4" cols="50">

         </textarea>
         <button  onClick={goPosts}>добавить</button>
        </form>
      
    </div>
  )
}

export default NewPost
