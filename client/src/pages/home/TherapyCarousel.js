import therapy7 from "../../images/therapy7.jpg";
import therapy3 from "../../images/therapy3.jpg";
import therapy4 from "../../images/therapy4.jpg";
import therapy5 from "../../images/therapy5.jpg";
import therapy6 from "../../images/therapy6.jpg";

function TherapyCarousel() {
	const slides = [
		//TODO : fill in
		// { image: therapy, title: "", altText: "", key: "", description: "" },
		{ image: therapy7, title: "", altText: "", key: "", description: "" },
		{ image: therapy3, title: "", altText: "", key: "", description: "" },
		{ image: therapy4, title: "", altText: "", key: "", description: "" },
		{ image: therapy5, title: "", altText: "", key: "", description: "" },
		{ image: therapy6, title: "", altText: "", key: "", description: "" },
	];
	return (
		<>
			<div
				id="carouselTherapySlides"
				className="carousel carousel-dark slide my-3 white-border shadow"
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
				<div className="carousel-inner" >
					{slides.map((slide, index) => (
						<div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index} >
							<img src={slide.image} className="d-block w-100 carousel-border" alt={slide.altText} />
						</div>
					))}
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselTherapySlides" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselTherapySlides" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</>
	);
}

export default TherapyCarousel;
