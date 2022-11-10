import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = () => (
  <Carousel autoPlay>
    <div>
      <img
        alt=""
        src="https://files.myglamm.com/site-images/original/Homepage-desktop---1920-x-527_1.png"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://files.myglamm.com/site-images/original/Carousel-Desktop---1920-527.jpg"
      />
    </div>

    <div>
      <img
        alt=""
        src="https://files.myglamm.com/site-images/original/Manish-Malhotra-1920.gif"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://files.myglamm.com/site-images/original/Pose-HD-1920.jpeg"
      />
    </div>
  </Carousel>
);

export default Slider;
