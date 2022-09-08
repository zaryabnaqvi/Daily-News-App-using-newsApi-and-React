
import './App.css';

import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News  from "./Components/news";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <>
      <Router>
      <NavBar/>
      <LoadingBar
      height={3}
      progress={this.state.progress}
      color="#f11946"
      />
      <Routes>
      <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pagesize={20} category="general" />}/>
      <Route exact path="/sport" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pagesize={20} category="sports" heading="Sports" />}/>
      <Route exact path="/tech" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pagesize={20} category="technology" heading="Technology"/>}/>
      <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pagesize={20} category="science" heading="Science"/>}/>
      <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pagesize={20} category="health" heading="Health"/>}/>
      <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pagesize={20} category="entertainment" heading="Entertainment"/>}/>
      <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pagesize={20} category="business" heading="Business"/>}/>

      </Routes>
      </Router>
</>);
}
    
  
}
     



