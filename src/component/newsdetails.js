import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../Styles/NewsDetails.module.css"; // Adjust the path accordingly
import logo from "../assets/heart.png";

const NewsDetails = ({ news, onhandlefav }) => {
  const [detaildata, setdetaildata] = useState("");
  const params = useParams();

  // use useEffect to filter the news data when the params or the news change
  useEffect(() => {
    // find the news item that matches the params id
    const newsItem = news.find((item, index) => index === Number(params.id));

    // set the detail data state to the news item
    setdetaildata(newsItem);
  }, [params, news]);

  return (
    <div className={styles.container}>
      <h1 className={styles.newsTitle}>News Details</h1>
      <div>
        <img
          style={{ height: "40px", cursor: "pointer" }}
          src={logo}
          onClick={() => onhandlefav(detaildata)}
          alt="Logo"
        />
      </div>
      {detaildata ? (
        <div>
          <h2 className={styles.newsTitle}>{detaildata.title}</h2>
          <p className={styles.newsDescription}>{detaildata.description}</p>
          <div>
            <img
              className={styles.newsImage}
              src={detaildata.urlToImage}
              alt={detaildata.title}
            />
          </div>
          <a
            className={styles.readMoreLink}
            href={detaildata.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      ) : (
        <p className={styles.loadingText}>Loading...</p>
      )}
    </div>
  );
};

export default NewsDetails;
