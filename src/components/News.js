import React ,{useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
import PropTypes from 'prop-types'
const News=(props)=> {
 
  const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
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
  }, [])
  // handlePrevClick = async () => {

  //   this.setState({ page: this.state.page - 1 });
  //   console.log(this.state.page);
  //   console.log(this.state.page);
  //   props.changeProgress(10);
  //   console.log(this.state.page);
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page-1}&pageSize=${props.pageSize}`;

  //   let data = await fetch(url);
  //   props.changeProgress(30);
  //   let parsedData = await data.json();
  //   props.changeProgress(50);
  //   console.log(parsedData);
  //   this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     // loading: false
  //   });
  //   props.changeProgress(100);
  //   this.setState({ page: this.state.page - 1 });
  // }
  // handleNextClick = async () => {


  //   console.log(this.state.page);
  //   props.changeProgress(10);
  //   console.log(this.state.page);
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page+1}&pageSize=${props.pageSize}`;

  //   let data = await fetch(url);
  //   props.changeProgress(30);
  //   let parsedData = await data.json();
  //   props.changeProgress(50);
  //   console.log(parsedData);
  //   this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,

  //   });
  //   props.changeProgress(100);
  //   this.setState({ page: this.state.page + 1 });
  // }
  const fetchMoreData=async()=>{
   
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setPage(page+1);
  }
    console.log("render");
    return (
      <div className="container my-3">
        <h3 className='text-center text-light' style={{marginTop:'75px'}}>Top {props.category} headlines</h3>
        <div className="container">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>That's all for the news!</b>
            </p>
          }>
            <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>);
              })}
            </div>
            </div>
            </InfiniteScroll >
            </div>
            </div>

          /* <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-primary" onClick={handlePrevClick} disabled={true ?page <= 1 : false}>&larr; Previous</button>
          <button disabled={state.page + 1 > Math.ceil(state.totalResults / props.pageSize)} type="button" className="btn btn-primary" onClick={handleNextClick}>Next &rarr;</button>
        </div> */
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