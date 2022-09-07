import Images from './Images/Cineworld.jpg';
import MovieOne from './Images/Dragonball.jpg';
import MovieTwo from './Images/Avatar.jpg';
import Carousel from 'react-bootstrap/Carousel';
export default function Home() {
  
    return (<>
    
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Images}
          alt="Cinema"
        />
        <Carousel.Caption>
          <h3>QA Cinema</h3>
          <p>Welcome to QA Cinema! We bring the latest blockbusters to a screen near you.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MovieOne}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MovieTwo}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    
    </>)
    
    
  }