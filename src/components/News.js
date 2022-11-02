import React ,{useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
import PropTypes from 'prop-types'
const News=(props)=> {

  const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(10);
    document.title = `${props.category}-Newsgrabber`;


  const updatePage =async()=> {
    console.log("updatePage")
    props.changeProgress(10);
    console.log(page);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    props.changeProgress(30);
    let parsedData = await data.json();
    props.changeProgress(50);
    console.log(parsedData);
    setArticles(parsedData.articles);
    console.log(articles);
    setTotalResults(parsedData.totalResults);
    // setLoading(false)
    props.changeProgress(100);

  }
  useEffect(() => {
    updatePage();
    // eslint-disable-next-line
  }, [page])
  
    console.log("render");
    return (
      <div className="container my-3">
        <h3 className='text-center text-light' style={{marginTop:'75px'}}>Top {props.category} headlines</h3>
        <div className="container">
            <div className="container">
            <div className="row">
              {articles.map((element,index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>);
              })}
            </div>
            </div>
            </div>

          <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-primary" onClick={()=>{setPage(page-1)}}>&larr; Previous</button>
          <button type="button" className="btn btn-primary" onClick={()=>{setPage(page+1)}}>Next &rarr;</button>
        </div> 
            </div>
    )
}
News.defaultProps = {
  country: 'in',
  category: 'General',
  pageSize: 6
}
News.propTypes={
  country:PropTypes.string,
  category:PropTypes.string,
  pageSize:PropTypes.number
}
export default News
