import Newsbox from "./newsbox";
import styles from "../Styles/newsbox.module.css";
const Home = ({ news }) => {
  //console.log(news);
  return (
    <div>
      <div className={styles.container}>
        <ul style={{ listStyle: "none" }} className={styles.newsContainer}>
          {news.map((item, index) => (
            <li key={index} className={styles.newsItem}>
              <Newsbox item={item} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Home;

// const styles = {
//   homePage: {
//     display: "flex",
//     flexWrap: "wrap",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     alignItems: "flex-end",
//   },
// };
