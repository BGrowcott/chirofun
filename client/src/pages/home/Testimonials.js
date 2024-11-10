import PageHeader from "../../components/PageHeader";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Testimonials() {
	const testimonials = [
		{
			name: "Burt Bondie",
			text: (
				<>
					I loved it when I was chiropracted it felt great and better than anything I've ever felt before and I would recommend it anyone.
					<br></br>
					<br></br>
					I'm now going to repeat the same sentence lots of times! I'm now going to repeat the same sentence lots of times!
				</>
			),
			stars: 5,
		},
		{
			name: "Tits Mcgee",
			text: `Yoga really help along with the chiropractic. I'm now going to repeat the same sentence lots of times! 
            I'm now going to repeat the same sentence lots of times! I'm now going to repeat the same sentence lots of times! 
            I'm now going to repeat the same sentence lots of times! I'm now going to repeat the same sentence lots of times!`,
			stars: 5,
		},
		{
			name: "50 Cent",
			text: "I loved it when I was chiropracted it felt great and better than anything I've ever felt before and I would recommend it anyone.",
			stars: 5,
		},
		{
			name: "Floopers Flappyears",
			text: "I loved it when I was chiropracted it felt great and better than anything I've ever felt before and I would recommend it anyone.",
			stars: 5,
		},
		{
			name: "Sean Bean",
			text: "I loved it when I was chiropracted it felt great and better than anything I've ever felt before and I would recommend it anyone.",
			stars: 5,
		},
		{
			name: "Wendy McLovenuts",
			text: "I loved it when I was chiropracted it felt great and better than anything I've ever felt before and I would recommend it anyone.",
			stars: 5,
		},
		{
			name: "Steely Dan",
			text: "I loved it when I was chiropracted it felt great and better than anything I've ever felt before and I would recommend it anyone.",
			stars: 5,
		},
		{
			name: "Winnie Farlane-MacStollenzburg II",
			text: "I loved it when I was chiropracted it felt great and better than anything I've ever felt before and I would recommend it anyone.",
			stars: 5,
		},
	];

	return (
		<>
			<div className="bg-dark border-top border-bottom border-5 border-secondary">
				<div className="container-md">
					<div className="py-2 py-lg-5">
						<h3 className="we-do-h3 fw-bold py-3 josefinSans-text text-light">Testimonials</h3>
						<div className="bg-light border border-warm border-5">
							<div id="carouselTestimonialSlides" className="carousel carousel-dark slide my-3" data-bs-ride="carousel">
								<div className="carousel-indicators">
									{testimonials.map((slide, index) => (
										<button
											key={index}
											type="button"
											data-bs-target="#carouselTestimonialSlides"
											data-bs-slide-to={index}
											className={`${index === 0 ? "active" : ""}`}
											aria-current="true"
											aria-label={`Slide ${index + 1}`}
										></button>
									))}
								</div>
								<div className="carousel-inner">
									{testimonials.map((testimonial, index) => (
										<div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
											<div className="px-lg-5 d-flex align-items-center" style={{ minHeight: "450px" }}>
												<div className="px-lg-5">
													<div className="px-5 pt-1 pb-3">
														<div className="position-relative" style={{ right: "20px" }}>
															<FontAwesomeIcon className="fs-1 text-black" icon={solid("quote-left")} />
														</div>
														<div className="fs-3">
															<figure>
																<blockquote className="blockquote">
																	<em>{testimonial.text}</em>
																</blockquote>
																<figcaption className="ms-lg-5 ms-3 mt-lg-3 blockquote-footer">{testimonial.name}</figcaption>
																<div className="ms-lg-3">
																	<div className="d-flex">
																		{new Array(testimonial.stars).fill(0).map((it, index) => (
																			<div key={index}>
																				<FontAwesomeIcon className="fs-3 text-warning" icon={solid("star")} />
																			</div>
																		))}
																	</div>
																</div>
															</figure>
														</div>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
								<button className="carousel-control-prev" type="button" data-bs-target="#carouselTestimonialSlides" data-bs-slide="prev">
									<span className="carousel-control-prev-icon" aria-hidden="true"></span>
									<span className="visually-hidden">Previous</span>
								</button>
								<button className="carousel-control-next" type="button" data-bs-target="#carouselTestimonialSlides" data-bs-slide="next">
									<span className="carousel-control-next-icon" aria-hidden="true"></span>
									<span className="visually-hidden">Next</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Testimonials;
