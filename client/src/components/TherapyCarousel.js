import therapy from "../images/new-imgs/therapy.jpg";
import therapy2 from "../images/new-imgs/therapy2.jpg";
import therapy3 from "../images/new-imgs/therapy3.jpg";
import therapy4 from "../images/new-imgs/therapy4.jpg";
import therapy5 from "../images/new-imgs/therapy5.jpg";
import therapy6 from "../images/new-imgs/therapy6.jpg";

function TherapyCarousel() {
  const slides = [
    { image: therapy, title: "", altText: "", key: "", description: "" },
    { image: therapy2, title: "", altText: "", key: "", description: "" },
    { image: therapy3, title: "", altText: "", key: "", description: "" },
    { image: therapy4, title: "", altText: "", key: "", description: "" },
    { image: therapy5, title: "", altText: "", key: "", description: "" },
    { image: therapy6, title: "", altText: "", key: "", description: "" },
  ];

  return (
    <>
      <div>
        <div className="container-md py-5">
          <div className="row">
            <div className="col-5">
              <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-end p-5 josefinSans-text ">
                <h3 className="fs-1 fw-bold text-dark pb-5">What we treat</h3>
                <ul className="fs-3 fw-bold we-treat-list">
                  <li>Lower Back Pain</li>
                  <li>Siatica</li>
                  <li>Neck Pain</li>
                  <li>Headaches</li>
                  <li>Shoulder Pain</li>
                  <li>Hip/Knee Arthritis</li>
                  <li>Tennis Albow</li>
                </ul>
              </div>
            </div>
            <div
              id="carouselTherapySlides"
              className="carousel carousel-dark col-7 slide my-5"
              stlye={{ backgroundColor: "#f9f7f7" }}
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                {slides.map((slide, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselTherapySlides"
                    data-bs-slide-to={index}
                    className={`${index === 0 ? "active" : ""}`}
                    aria-current="true"
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {slides.map((slide, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <img
                      src={slide.image}
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block bg-light-fade rounded">
                      <h5 className="fw-bold h4 josefinSans-text text-dark">
                        First slide label
                      </h5>
                      <p className="fs-5">
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselTherapySlides"
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
                data-bs-target="#carouselTherapySlides"
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

export default TherapyCarousel;
