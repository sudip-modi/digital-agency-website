import React from "react";
import Footer from "../components/Footer/Footer";
import "./css/Ourwork.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import geneca from "../assets/images/geneca.PNG";

const Ourwork = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="ourwork-container">
        <h1>Our work</h1>
        <div className="work-carousel-container">
          <Slider {...settings}>
            <div className="work-card">
              <div className="work-img-container">
                <img
                  src={geneca}
                  alt="geneca website"
                  className="work-card-img"
                />
              </div>
              <div className="work-text-container">
                <div className="work-top-row">
                  <h5>
                    <strong>Geneca life sciences</strong>
                  </h5>
                  <p className="service-type-text">
                    <small>Website development</small>
                  </p>
                </div>
                <div className="work-middle-row">
                  <p>
                    Trust our world class team with your projects while you
                    chill with a cup of coffee.
                  </p>
                </div>
                <div className="work-bottom-row">
                  <div className="tags">
                    <button>Strategy</button>
                    <button>Consultation</button>
                    <button>Management</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-card">
              <div className="work-img-container">
                <img
                  src={geneca}
                  alt="geneca website"
                  className="work-card-img"
                />
              </div>
              <div className="work-text-container">
                <div className="work-top-row">
                  <h5>
                    <strong>Geneca life sciences</strong>
                  </h5>
                  <p className="service-type-text">
                    <small>Website development</small>
                  </p>
                </div>
                <div className="work-middle-row">
                  <p>
                    Trust our world class team with your projects while you
                    chill with a cup of coffee.
                  </p>
                </div>
                <div className="work-bottom-row">
                  <div className="tags">
                    <button>Strategy</button>
                    <button>Consultation</button>
                    <button>Management</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-card">
              <div className="work-img-container">
                <img
                  src={geneca}
                  alt="geneca website"
                  className="work-card-img"
                />
              </div>
              <div className="work-text-container">
                <div className="work-top-row">
                  <h5>
                    <strong>Geneca life sciences</strong>
                  </h5>
                  <p className="service-type-text">
                    <small>Website development</small>
                  </p>
                </div>
                <div className="work-middle-row">
                  <p>
                    Trust our world class team with your projects while you
                    chill with a cup of coffee.
                  </p>
                </div>
                <div className="work-bottom-row">
                  <div className="tags">
                    <button>Strategy</button>
                    <button>Consultation</button>
                    <button>Management</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-card">
              <div className="work-img-container">
                <img
                  src={geneca}
                  alt="geneca website"
                  className="work-card-img"
                />
              </div>
              <div className="work-text-container">
                <div className="work-top-row">
                  <h5>
                    <strong>Geneca life sciences</strong>
                  </h5>
                  <p className="service-type-text">
                    <small>Website development</small>
                  </p>
                </div>
                <div className="work-middle-row">
                  <p>
                    Trust our world class team with your projects while you
                    chill with a cup of coffee.
                  </p>
                </div>
                <div className="work-bottom-row">
                  <div className="tags">
                    <button>Strategy</button>
                    <button>Consultation</button>
                    <button>Management</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-card">
              <div className="work-img-container">
                <img
                  src={geneca}
                  alt="geneca website"
                  className="work-card-img"
                />
              </div>
              <div className="work-text-container">
                <div className="work-top-row">
                  <h5>
                    <strong>Geneca life sciences</strong>
                  </h5>
                  <p className="service-type-text">
                    <small>Website development</small>
                  </p>
                </div>
                <div className="work-middle-row">
                  <p>
                    Trust our world class team with your projects while you
                    chill with a cup of coffee.
                  </p>
                </div>
                <div className="work-bottom-row">
                  <div className="tags">
                    <button>Strategy</button>
                    <button>Consultation</button>
                    <button>Management</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-card">
              <div className="work-img-container">
                <img
                  src={geneca}
                  alt="geneca website"
                  className="work-card-img"
                />
              </div>
              <div className="work-text-container">
                <div className="work-top-row">
                  <h5>
                    <strong>Geneca life sciences</strong>
                  </h5>
                  <p className="service-type-text">
                    <small>Website development</small>
                  </p>
                </div>
                <div className="work-middle-row">
                  <p>
                    Trust our world class team with your projects while you
                    chill with a cup of coffee.
                  </p>
                </div>
                <div className="work-bottom-row">
                  <div className="tags">
                    <button>Strategy</button>
                    <button>Consultation</button>
                    <button>Management</button>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ourwork;
