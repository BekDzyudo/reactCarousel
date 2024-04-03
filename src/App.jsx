import * as React from "react";
import Carousel from "react-bootstrap/Carousel";
import vid1 from "./assets/Dasturiy_Injiniring_HD.mp4";
import vid2 from "./assets/Hamshiralik_Ishi.mp4";
import vid3 from "./assets/Tokarlik_Kasbi_uchun.mp4";
import "./App.css";
import ReactPlayer from "react-player";

export default function App() {
  let arr = [vid1, vid2, vid3];
  return (
    <div className="containers">
      <div className="carouselContainer">
        <Carousel className="mainCarousel" interval={null}>
          {arr.map((element, index) => {
            return (
              <Carousel.Item key={index} className="item">
                <ReactPlayer className="itemImg" controls url={element} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
