import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      mode: 'light',
      totalResults: 0
    };
    document.title = `${this.props.category.charAt(0).toUpperCase()}${this.props.category.slice(1)}-NewsMonkey`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;
  
    let data = await fetch(url);
    let parsedData = await data.json();
  
    this.setState((prevState) => ({
      articles: prevState.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: nextPage,
    }));
  };
  
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: '0' }}>
          NewsMonkey - Top {this.props.category.charAt(0).toUpperCase()}{this.props.category.slice(1)} Headlines
        </h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          loadMore={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
          useWindow={true}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ''}
                    desc={element.description ? element.description.slice(0, 88) : ''}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    mode={this.props.mode}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
  
}

export default News;
