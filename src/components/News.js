import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./spinner";
import PropTypes from 'prop-types'


export class News extends Component {
    // let {country , category , pageSize } = this.props;

  static defaultProps = {
    country: "us",
    pageSize: 30,
    category : "sports"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category : PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page : 1,

    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bd97a0f5c2f9436592977e0a7269753b&PAGE= ${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading : false
    });

  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  newsurl={element.url}
                  imageurl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://media.npr.org/assets/img/2022/10/22/gettyimages-1435390766_wide-a1d11194df38c8118193e4a6e4fcf9452a3fd8a9-s1400-c100.jpg"
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
