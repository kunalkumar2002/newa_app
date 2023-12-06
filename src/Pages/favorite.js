import styles from "../Styles/newsbox.module.css";
const Favorite = ({ favorites }) => {
  console.log(favorites);
  return (
    <div style={{ height: "100vh" }}>
      <div className={styles.container}>
        <ul style={{ listStyle: "none" }} className={styles.newsContainer}>
          {favorites.map((item, index) => (
            <li key={index} className={styles.newsItem}>
              <div className="newsItem">
                <div>
                  <img
                    style={{ width: "100%" }}
                    src={item.urlToImage}
                    alt="news-pic"
                  />
                </div>
                <div style={{ fontSize: "x-large", textAlign: "left" }}>
                  {item.title}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Favorite;
