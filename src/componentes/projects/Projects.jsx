import React,{useState} from "react"
import styles from "./Projects.module.css"
import Imagenes from "../../images/cielo.png";
import {Carousel} from 'react-bootstrap';
import toDo from "../../images/toDoReact.png";
function Projects (){ 
const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};
return (
<div className={styles.container}>
  <div className={styles.containerTitle}>
    <h2 className={styles.title}> My Projects </h2>
  </div>

  <div className={styles.containerCarousel}>
    <Carousel className={styles.carousel} activeIndex={index} interval={null} onSelect={handleSelect}>
      <Carousel.Item  className={styles.images}>
        <div className={styles.contenedor}>
            <figure>
            <img id={styles.imagen1} className="d-block w-100" src={Imagenes} alt="Weather App"/>
                <div className={styles.description}>
                    <h3>Weather App</h3>
                    <p>App to see the weather of all the cities in the world</p>
                    <br />
                    <h3> Check it out!</h3>
                </div>
            </figure>
        </div>
        <Carousel.Caption>
          <a href="https://joyful-jelly-7e41e1.netlify.app" className={styles.buton}>Weather App</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles.images2}>
      <div className={styles.contenedor}>
      <figure>
        <img id={styles.imagen2} className="d-block w-100" src={toDo} alt="To Do App"/>
        <div className={styles.description}>
                    <h3>To-Do App</h3>
                    <p>App to make a list of tasks to do</p>
                    <br />
                    <h3> Check it out!</h3>
                </div>
            </figure>
            </div>
        <Carousel.Caption >
         <a  href="https://todoaplautaro.netlify.app" className={styles.buton}>To Do App</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles.images3}>
      <div className={styles.contenedor}>
      <figure>

        <div className={styles.neon}>
          <span className={styles.text} data-text="Lauflix">Lauflix</span>
          <span className={styles.gradient}></span>
          <span className={styles.spotlight}></span>
        </div>
        <div className={styles.description}>
                    <h3>Lauflix</h3>
                    <p>App that simulates the style of netflix (It does not include the movies just a small description)</p>
                    <br />
                    <h3> Check it out!</h3>
                </div>
        </figure>
        </div>
        <Carousel.Caption>
          <a href="https://lauflix.netlify.app" className={styles.buton}>Movies App</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
</div>
);
}
export default Projects;
