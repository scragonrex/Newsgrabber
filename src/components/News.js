import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';


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
      totalResults: 0,
    };
    document.title = `${this.props.category}-Newsgrabber`;
  }

  async updatePage() {
    console.log("updatePage")
    this.props.setProgress(10);
    console.log(this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

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
 
  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: this.state.page + 1
    });
  }


  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h3 className='text-center text-light' style={{ marginTop: '75px' }}>Top {this.props.category} headlines</h3>
        <div className="container">
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>That's all for the news!</b>
              </p>
            }>
            <div className="container">
              <div className="row">
                {this.state.articles.map((element) => {
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
    )
  }
}

export default News