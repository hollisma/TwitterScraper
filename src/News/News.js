import React, { Component } from "react";
import "./News.css";
import "./scraper.py";

class News extends Component {
  createArticles = (headlines, links) => {
    // headlines = getHeadlines();
    // links = getLinks();
    let articles = [];
    for (let i = 0; i < headlines.length; i++) {
      articles.push(<a href={{ links: i }}>{{ headlines: i }}</a>);
    }
    return articles;
  };

  render() {
    return (
      <div id="intro">
        <h2 id="title"> News Articles </h2>
        <script type="text/javascript">
          this.createArticles({{ headlines }}, {{ links }})
        </script>
      </div>
    );
  }
}

export default News;
