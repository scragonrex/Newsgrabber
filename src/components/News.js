import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
  static defaultProps = {
    country: 'in',
    category: 'General',
    pageSize: 6
  }
  constructor(props) {
    super(props);
    console.log("Hello ");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0,
      flag:1
    };
    document.title=`${this.props.category}-Newsgrabber`;
  
  }
  async updatePage() {
    console.log("updatePage")
    this.props.setProgress(10);
    console.log(this.state.page);
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let url="https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=83f0401628484983a8b6ef6dc468d0e6";

    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
     
    });
    this.props.setProgress(100);
  
  }
  async componentDidMount() {
    this.updatePage();
  }
  handlePrevClick = async () => {

    this.setState({ page: this.state.page - 1 });
    console.log(this.state.page);
    console.log(this.state.page);
    this.props.setProgress(10);
    console.log(this.state.page);
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let url="https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=83f0401628484983a8b6ef6dc468d0e6";
 
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      // loading: false
    });
    this.props.setProgress(100);
    this.setState({ page: this.state.page - 1 });
  }
  handleNextClick = async () => {

   
    console.log(this.state.page);
    this.props.setProgress(10);
    console.log(this.state.page);
    let url = "https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=83f0401628484983a8b6ef6dc468d0e6";
   
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      
    });
    this.props.setProgress(100);
    this.setState({ page: this.state.page + 1 });
  }

  render() {
 
    console.log("render");
    return (
      <div className="container my-3">
        <h3 className='asset1 text-center text-light'>Top {this.props.category} headlines</h3>
          <div className="container">
        <div className="row">
        {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>);
          })}
        </div></div>
        
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-primary" onClick={this.handlePrevClick} disabled={true ? this.state.page <= 1 : false}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
