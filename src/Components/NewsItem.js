import React, { Component } from 'react'




export default class NewsItem extends Component {
  render() {
    let {title,description,imageurl,newsURL,date,author,source}=this.props
    return (
 <>
 <div className="card" style={{ width :" 18rem"}}>
 <img src={!imageurl?"https://images.axios.com/TgLq7Nk4mF-U0jzK_9Zm9ikrr1g=/0x0:1920x1080/1366x768/2022/09/04/1662313630385.jpg":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5><span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
    {source}
    <span class="visually-hidden">soures</span>
    </span>
    <p className="card-text">{description} <p className='text-muted'>By {(author==="" || author===null)?"unknown":author} on {date}</p></p>
    <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-dark">view more</a>
  </div>
</div>
 </>
 
    )
  }
}
