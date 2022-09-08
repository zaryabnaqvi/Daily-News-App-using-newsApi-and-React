import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types';
import Spinner from "./Spinner.js";

export default class news extends Component {
  static defaultProps={
    pagesize:20,
    category:"general",
    heading:"General"

  }
  static propTypes={
    pagesize:PropTypes.number,
    category:PropTypes.string,
    heading:PropTypes.string
    
  }

  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:false,
      page:1
    }
    document.title="Daily - "+this.props.heading;
  }

 async componentDidMount(){
    this.props.setProgress(10);  
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pagesize}`;
    let data = await fetch(url)
    this.props.setProgress(30);  
    let updatednews = await data.json();
    this.props.setProgress(70);  

    console.log(updatednews)
    this.setState({articles:updatednews.articles,totalResults:updatednews.totalResults})
    this.props.setProgress(100);  

 }
    prevPage=async()=>{
    console.log("previous")
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading:false
    })
  }
   nextPage =async()=>{
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) {
    }
    else {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading:false
        })
    }

  }
  
  render() {

    return (
      <>
      <div className='container mt-5 ps-5 pt-5'>
        <h1 className="text-center mb-3 pb-3">Top Headlines-{this.props.heading}</h1>
        {this.state.loading && <Spinner/>}
        <div className="row ">
        {
        !this.state.loading && this.state.articles.map((element)=>{
          
           return (
           <div className='col-sm-4 mb-5 ' key={element.url}>
               <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsURL={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
            </div> )})}
            </div>
            <hr/>
            <div className='container  m-5'>
<div class="d-flex justify-content-between my-5">
<button disabled={this.page<=1} type="button" class="btn btn-dark" onClick={this.prevPage}>Previous</button>
<button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" class="btn btn-dark" onClick={this.nextPage}>Next</button>
 </div>
      </div>
</div>
      </>
    )
  }
}
