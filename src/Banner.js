import { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/111/0/512"
          alt="First slide"
          height="300"
          weight="300"
        />
        <Carousel.Caption>
          <h3 style={{ fontSize: "50px" }}>Welcome to the Car Gadgets</h3>
          <p>With full of Gadgets are showing here</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/1072/0/512"
          alt="Second slide"
          height="300"
          weight="300"
        />
        <Carousel.Caption>
          <h3 style={{ fontSize: "50px" }}>Old Vehical Gadgets</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/371/0/512"
          alt="Third slide"
          height="300"
          weight="300"
        />
        <Carousel.Caption>
          <h3 style={{ fontSize: "40px" }}>Fancy And Designer Products</h3>
          <p>
            Here, we tell you the many wonderful products such as car fresher,
            hang toys and many more
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
