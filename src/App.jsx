import { useState } from 'react'
import { Route, Routes} from "react-router-dom";
import './App.css'
import GetAllArticles from './Components/GetAllArticles'
import Nav from './Components/Nav'

function App() {

  const [allArticles, setAllArticles] = useState([]);
  const [user, setUser] = useState([]);

  //if (!user) return ()

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={ <GetAllArticles allArticles={allArticles} setAllArticles={setAllArticles}/>} />
        {/* <Route
          path="/articles/topic?topic="
          element={<ArticlesByTopic/>}
        /> 
         <Route path="/user/:userId/*" element={<UserProfile/>}>
          <Route index element={<MyComments />} />
        </Route> */}
      </Routes>
     
    </>
  )
}

export default App
