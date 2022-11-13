import React from 'react'

const NewsItem=(props)=> {
    let {title,description,imageUrl,newsUrl,author, date}=props;
    if(props===undefined)
    return(
      <div><h2>That's all for the news</h2></div>
    )
    else{
    return (
      <div className='my-3'>
      <div className="card">
  <img src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HWdd0n8XoTdFVB9887n5zkDMiX32lUREjw&usqp=CAU"} height="160px" width="160px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className='card-text'><small className='text-dark'>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer"  className="btn btn-sm btn-primary btn1">Read more</a>
  </div>
</div>
      </div>
    )
    }
}

export default NewsItem