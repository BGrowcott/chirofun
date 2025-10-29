import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import google from "../../images/google.png";
import reviewsJson from "../../utils/reviews.json"; // incase api call to google fails
import { useGlobalContext } from "../../utils/GlobalState";
import { LOAD_REVIEWS } from "../../utils/actions";

function Testimonials() {

	const [state, dispatch] = useGlobalContext();

	return (
		<>
			<section className="">
				<div className=" ">
					<div className="">
						<div className="container-fluid bg-light border-top border-bottom border-secondary border-3 shadow-inset">
							<div className="row">
								<div className="col-12 col-lg-2 d-flex align-items-center justify-content-center justify-content-lg-end">
									<div className="text-center">
										<strong className="fs-5">Google Reviews</strong>
										<div className="d-flex justify-content-center">
											{new Array(state.rating).fill(0).map((it, index) => (
												<div key={index}>
													<FontAwesomeIcon className="fs-4 text-warning" icon={solid("star")} />
												</div>
											))}
										</div>
										<div>
											<strong>{state.rating}</strong> Stars | <strong>{state.userRatingCount}</strong> reviews
										</div>
									</div>
								</div>

								<div className="col-12 col-lg-10">
									<div id="carouselTestimonialSlides" className="carousel carousel-dark slide my-3" data-bs-ride="carousel">
										<div className="carousel-indicators">
											{state.reviews.map((slide, index) => (
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
											{state.reviews.map((testimonial, index) => (
												<div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
													<div className="px-lg-5 d-flex align-items-center" style={{ }}>
														<div className="px-lg-5">
															<div className="px-4 px-lg-5 pt-1 pb-3">
																<div className="position-relative" style={{ right: "20px" }}>
																	<FontAwesomeIcon className="fs-3 text-black" icon={solid("quote-left")} />
																</div>
																<div className="fs-5">
																	<figure>
																		<blockquote className="review-quote-size blockquote px-1 fs-6 overflow-auto slim-scroll">
																			<em className="">{testimonial.text.text}</em>
																		</blockquote>
																		<div className="d-flex align-items-center ms-lg-4 ms-2">
																			<div className="me-3">
																				<a href={testimonial.googleMapsUri} target="_blank">
																					<img width="40" alt="Google logo" src={google}></img>
																				</a>
																			</div>
																			<figcaption className="blockquote-footer my-2">
																				{testimonial.authorAttribution.displayName}
																				<br></br>
																				<em className="fs-6">{testimonial.relativePublishTimeDescription}</em>
																			</figcaption>
																		</div>
																		<div className="ms-lg-3">
																			<div className="d-flex">
																				{new Array(testimonial.rating).fill(0).map((it, index) => (
																					<div key={index}>
																						<FontAwesomeIcon className="fs-4 text-warning" icon={solid("star")} />
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
										<button
											className="carousel-control-prev"
											type="button"
											data-bs-target="#carouselTestimonialSlides"
											data-bs-slide="prev"
										>
											<span className="d-none d-lg-inline-block carousel-control-prev-icon" aria-hidden="true"></span>
											<span className="visually-hidden">Previous</span>
										</button>
										<button
											className="carousel-control-next"
											type="button"
											data-bs-target="#carouselTestimonialSlides"
											data-bs-slide="next"
										>
											<span className="d-none d-lg-inline-block carousel-control-next-icon" aria-hidden="true"></span>
											<span className="visually-hidden">Next</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Testimonials;
