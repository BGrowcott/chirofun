import PageHeader from "../../components/PageHeader";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import google from "../../images/new-imgs/google.png";
import reviewsJson from "../../utils/reviews.json" // incase api call to google fails
import { useGlobalContext } from "../../utils/GlobalState";
import { LOAD_REVIEWS } from "../../utils/actions";

function Testimonials() {

	const [state, dispatch] = useGlobalContext();
	const [reviews, setReviews] = useState(reviewsJson);

	useEffect(() => {
		if (state.reviews.length) { // if reviews exists in the global context we don't need to call the api again
			setReviews([...state.reviews]);
			return;
		}

		(async () => {
			try {
				const res = await fetch("/api/reviews");
				const json = await res.json();
				dispatch({type: LOAD_REVIEWS, reviews: [...json.reviews]});
				setReviews(json.reviews);
			} catch (error) {
			}
		})();
	}, []);

	return (
		<>
			<div className="">
				<div className="container-md">
					<div className="py-2 py-lg-5">
						<h3 className="we-do-h3 fw-bold josefinSans-text text-dark">Testimonials</h3>
						<div className="bg-light border border-secondary border-5 shadow-inset">
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
																<div className="d-flex align-items-center ms-lg-5 ms-3">
																	<div className="me-4">
																		<a href={testimonial.googleMapsUri} target="_blank">
																			<img width="50" src={google}></img>
																		</a>
																	</div>
																	<figcaption className="blockquote-footer mt-3">
																		{testimonial.authorAttribution.displayName}
																		<br></br>
																		<em className="fs-5">{testimonial.relativePublishTimeDescription}</em>
																	</figcaption>
																</div>

																<div className="ms-lg-3">
																	<div className="d-flex">
																		{new Array(testimonial.rating).fill(0).map((it, index) => (
																			<div key={index}>
																				{/* <span className="text-shadow fs-1">⭐</span> */}
																				<FontAwesomeIcon className="fs-3 text-warning text-shadow" icon={solid("star")} />
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
