import LoadingBar from 'react-top-loading-bar'
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  state={progress:0}

  setProgress=(progress)=>
  {
    this.setState({progress:progress});
  }

  apiKey=process.env.REACT_APP_NEWS_API;
  
  render()
  {
    return(
    <BrowserRouter>
    <NavBar/>
    <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
    <Routes>
      <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="General" pageSize={9} country="in" category="General" />}/>
      <Route exact path="/General" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="General" pageSize={9} country="in" category="General" />}/>
      <Route exact path="/Business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="Business" pageSize={9} country="in" category="Business"/>}/>
        <Route exact path="/Science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="Science" pageSize={9} country="in" category="Science"/>}/>
        <Route exact path="/Sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="Sports" pageSize={9} country="in" category="Sports"/>}/>
        <Route exact path="/Entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="Entertainment" pageSize={9} country="in" category="Entertainment" />}/>
        <Route exact path="/Health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="Health" pageSize={9} country="in" category="Health"/>}/>
        <Route exact path="/Technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="Technology" pageSize={9}country="in" category="Technology"/>}/>
    </Routes>
    </BrowserRouter>
  )
  }
  }