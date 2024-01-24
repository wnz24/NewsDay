import React, {  useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  //  const [state, setstate] = useState() ;




  const UpdatePage = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=18574ee64dd04c3bb43e46521d219b20&page=${page}&pagesize=${props.pagesize}`;
    setloading(true);
    props.setProgress(40);
    let data = await fetch(url);
    let parseddata = await data.json();
    props.setProgress(70);
    console.log(parseddata);
    setarticles(parseddata.articles)
    settotalResults(parseddata.totalResults)
    setloading(false);

    props.setProgress(100);
  }
  const fetchMoreData= async () => {
   
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=18574ee64dd04c3bb43e46521d219b20&page=${page+1}&pagesize=${props.pagesize}`;
     setpage(page + 1);
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    setarticles(articles.concat(parseddata.articles));
    settotalResults(parseddata.totalResults);

  }


  useEffect(() => {
    UpdatePage();

  }, []);


  // handlePrevClick = async () => {
  //   this.setState({ page: page - 1 });
  //   this.UpdatePage();
  // };

  // handleNextClick = async () => {
  //   this.setState({ page: page + 1 });
  //   this.UpdatePage();
  // };


  return (
    <>
      <h2 className="text-center" style={{marginTop:"90px"}}> NewsDay - Top Headelines</h2>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >

        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 24) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 20)
                        : ""
                    }
                    Url={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}

          </div>
        </div>
      </InfiniteScroll>


    </>
  );

}
News.defaultProps = {
  country: "us",
  pagesize: "10",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};


export default News;
