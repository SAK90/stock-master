import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem';
import './style.css'

function News(props) {
  const [articles, setArticles] = useState([]);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1); 
  } 

  const updateNews = async ()=> {
    const url = `https://newsapi.org/v2/everything?q=${props.category}&sortBy=popularity&apiKey=6ea566b968344856b413fad9a845bc07&pageSize=${props.pageSize}`; 
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
}

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews(); 
}, [])

  return <div>
      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>News - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
      <div className="container">     
        <div className="row">
            {articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
            })}
        </div>
      </div> 
  </div>;
}

export default News;
