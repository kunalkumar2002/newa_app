import { useNavigate } from "react-router-dom";

const Newsbox = ({ item, index }) => {
  const navigate = useNavigate();
  const handledetails = () => {
    //console.log(value);
    navigate(`/newsdetails/${index}`);
  };
  return (
    <div className="container1" onClick={handledetails}>
      <div className="newsContainer">
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
      </div>
    </div>
  );
};
export default Newsbox;
