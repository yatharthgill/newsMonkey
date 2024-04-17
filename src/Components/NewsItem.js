import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    const { title, desc, imgUrl, newsUrl, mode, author, date, source } = this.props;

    return (
      <div className='my-3'>
        <div className={`card bg-${mode === 'light' ? 'light' : 'dark'} text-${mode === 'light' ? 'dark' : 'light'}`}>
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>
        <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={!imgUrl?"https://c.ndtvimg.com/2023-04/nla18k2g_air-india-boeing-787_650x400_10_April_23.jpg":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <p className="card-text"><small className="text-muted">By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}
            </small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className={`btn btn-${mode === 'light' ? 'dark' : 'light'} btn-sm`}>Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
