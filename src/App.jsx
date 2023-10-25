import { useState } from 'react'
import { Route, Routes} from "react-router-dom";
import React from 'react';
import './App.css'
import GetAllArticles from './Components/GetAllArticles'
import Nav from './Components/Nav'
import ArticleById from './Components/ArticleById';
import UserProfile from './Components/UserLogin';

function App() {

  const [allArticles, setAllArticles] = useState([]);


  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={ <GetAllArticles allArticles={allArticles} setAllArticles={setAllArticles}/>} />
        <Route path="/articles/:article_id" element={ <ArticleById />} />
         <Route path="/user/*" element={<UserProfile/>}>
        </Route>
      </Routes>
     
    </>
  )
}

export default App

        {/* <Route
          path="/articles/topic?topic="
          element={<ArticlesByTopic/>}
        />  */}
        {/* <Route index element={<MyComments />} /> */}