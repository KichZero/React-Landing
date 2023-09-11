import React, { useEffect } from "react";
import "../Style/Carousel.css";

const Carousel = () => {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const carouselContent = document.querySelector(".carousel-content");

    root.style.setProperty("--marquee-elements", carouselContent.children.length);

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      carouselContent.appendChild(carouselContent.children[i].cloneNode(true));
    }
  }, []);

  return (
    <div className="marquee">
      <ul className="marquee-content carousel-content">
        <li><i className="fab fa-github"></i></li>
        <li><i className="fab fa-codepen"></i></li>
        <li><i className="fab fa-free-code-camp"></i></li>
        <li><i className="fab fa-dev"></i></li>
        <li><i className="fab fa-react"></i></li>
        <li><i className="fab fa-vuejs"></i></li>
        <li><i className="fab fa-angular"></i></li>
        <li><i className="fab fa-node"></i></li>
        <li><i className="fab fa-wordpress"></i></li>
        <li><i className="fab fa-aws"></i></li>
        <li><i className="fab fa-docker"></i></li>
        <li><i className="fab fa-android"></i></li>
      </ul>
    </div>
  );
};

export default Carousel;
