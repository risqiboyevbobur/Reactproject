import React from "react";
const img = require("./components/img/pexels-christian-heitz-842711.jpg");
const img2 = require("./components/img/pexels-francesco-ungaro-1525041 (1).jpg");
const img3 = require("./components/img/pexels-pok-rie-2049422.jpg");

export default function Home() {
  return (
    <>
    <h2 className="welcome">Welcome to Header page</h2>
      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-10">
            <div id="carouselExampleIndicators" class="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={img} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img3} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
