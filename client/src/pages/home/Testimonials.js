import PageHeader from "../../components/PageHeader";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import google from "../../images/new-imgs/google.png"

function Testimonials() {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await fetch("/api/reviews");
			const json = await res.json();
			setReviews(json.reviews);
		})();
	}, []);

	return (
		<>
			<div className="bg-dark border-top border-bottom border-5 border-secondary">
				<div className="container-md">
					<div className="py-2 py-lg-5">
						<h3 className="we-do-h3 fw-bold py-3 josefinSans-text text-light">Testimonials</h3>
						<div className="bg-light border border-warm border-5">
							<div id="carouselTestimonialSlides" className="carousel carousel-dark slide my-3" data-bs-ride="carousel">
								<div className="carousel-indicators">
									{reviews.map((slide, index) => (
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
									{reviews.map((testimonial, index) => (
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
																	<em>{testimonial.text.text}</em>
																</blockquote>
																<div className="d-flex align-items-center">
																<figcaption className="ms-lg-5 ms-3 mt-lg-3 blockquote-footer">
																	{testimonial.authorAttribution.displayName}
																	<br></br>
																	<em className="fs-5">{testimonial.relativePublishTimeDescription}</em>
																</figcaption>
																<div className="ms-5">
																	<a href={testimonial.googleMapsUri} target="_blank"><img width="50" src={google}></img></a>
																</div>
																</div>

																<div className="ms-lg-3">
																	<div className="d-flex">
																		{new Array(testimonial.rating).fill(0).map((it, index) => (
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
