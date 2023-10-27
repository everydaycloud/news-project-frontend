import { Route, Routes} from "react-router-dom";
import React from 'react';
import './App.css'
import GetAllArticles from './Components/GetAllArticles'
import Nav from './Components/Nav'
import ArticleById from './Components/ArticleById';
import UserProfile from './Components/UserLogin';
import ArticlesByTopic from './Components/ArticlesByTopic';
import DisplayByTopic from "./Components/ArticlesByTopic/DisplayByTopic";
import BadPath from "./Components/404";



function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={ <GetAllArticles/>} />
        <Route path="/articles/:article_id" element={ <ArticleById />} />
        <Route path="/articles/topics/" element={<ArticlesByTopic/>}/>
        <Route path="/articles/topics/:topic" element={<DisplayByTopic/>}/>
        <Route path="/user/*" element={<UserProfile/>}/>
        <Route path="/*" element={<BadPath/>}></Route>
      </Routes>
     
    </>
  )
}

export default App
