import LoadingBar from 'react-top-loading-bar'
import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter, Routes,Route} from "react-router-dom";

const App=()=>{
  const [progress, setProgress] = useState(0);

  const changeProgress=(progress)=>
  {
    setProgress(progress);
  }
  const apiKey=process.env.REACT_APP_NEWS_API;
    return(
    <BrowserRouter>
    <NavBar/>
    <LoadingBar
        color='#f11946'
        progress={progress}
      />
    <Routes>
      <Route exact path="/" element={<News apiKey={apiKey} changeProgress={changeProgress} key="General" pageSize={9} country="in" category="General" />}/>
      <Route exact path="/General" element={<News apiKey={apiKey} changeProgress={changeProgress} key="General" pageSize={9} country="in" category="General" />}/>
      <Route exact path="/Business" element={<News apiKey={apiKey} changeProgress={changeProgress} key="Business" pageSize={9} country="in" category="Business"/>}/>
        <Route exact path="/Science" element={<News apiKey={apiKey} changeProgress={changeProgress} key="Science" pageSize={9} country="in" category="Science"/>}/>
        <Route exact path="/Sports" element={<News apiKey={apiKey} changeProgress={changeProgress} key="Sports" pageSize={9} country="in" category="Sports"/>}/>
        <Route exact path="/Entertainment" element={<News apiKey={apiKey} changeProgress={changeProgress} key="Entertainment" pageSize={9} country="in" category="Entertainment" />}/>
        <Route exact path="/Health" element={<News apiKey={apiKey} changeProgress={changeProgress} key="Health" pageSize={9} country="in" category="Health"/>}/>
        <Route exact path="/Technology" element={<News apiKey={apiKey} changeProgress={changeProgress} key="Technology" pageSize={9}country="in" category="Technology"/>}/>
    </Routes>
    </BrowserRouter>
  )
  }
  export default App