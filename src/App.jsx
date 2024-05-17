import { Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Post from "./pages/Post"
import NewPost from "./pages/NewPost"
import SinglePages from "./pages/SinglePages"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index  element={<Home/>}/>
        <Route path="posts" element={<Post/>} />
        <Route path="new-post" element={<NewPost/>} />
        <Route path="posts/:id" element={<SinglePages/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
