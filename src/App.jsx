import { useState } from 'react'
import { Route, Routes} from "react-router-dom";
import React from 'react';
import './App.css'
import GetAllArticles from './Components/GetAllArticles'
import Nav from './Components/Nav'
import ArticleById from './Components/ArticleById';
import UserProfile from './Components/UserLogin';
import ArticlesByTopic from './Components/ArticlesByTopic';

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={ <GetAllArticles/>} />
        <Route path="/articles/:article_id" element={ <ArticleById />} />
        <Route path="/articles/topics" element={<ArticlesByTopic/>}/> 
         <Route path="/user/*" element={<UserProfile/>}>
        </Route>
      </Routes>
     
    </>
  )
}

export default App

        {/* <Route index element={<MyComments />} /> */}