import * as React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./App.css";
import ReactPlayer from "react-player";

export default function App() {
  const [mainIndex, setMainIndex] = React.useState(0);
  const [arr, setArr] = React.useState([]);

  function handleSelect(e) {
    setMainIndex(e);
  }

  React.useEffect(() => {
    fetch("http://192.168.101.222:8000/videos", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArr(data);
      });
  }, []);

  return (
    <div className="containers">
      <div className="carouselContainer">
        <Carousel
          className="mainCarousel"
          interval={null}
          onSelect={handleSelect}
        >
          {arr.map((element, index) => {
            return (
              <Carousel.Item key={index} className="item">
                <ReactPlayer
                  className="itemImg"
                  controls
                  url={element.file}
                  muted={mainIndex !== index}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
