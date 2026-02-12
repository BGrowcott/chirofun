import hero2 from "../../images/hero2.5.jpg";
import hero3 from "../../images/mainBuilding4x3.jpeg";
import hero4 from "../../images/alt3.png";
import { useGlobalContext } from "../../utils/GlobalState";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import google from "../../images/google.png";

function Hero() {
	const [state, dispatch] = useGlobalContext();

	return (
		// <section className="hero position-relative">
		// 	<div className="hero-img"></div>
		// 	<div className="container-fluid p-0">
		// 		<div className="row">
		// 			<div className="position-absolute top-0 col-12 col-md-10 col-lg-9 col-xxl-6 hero-overlay">
		// 				<div className="row h-100 d-flex align-items-md-center">
		// 					<div className="p-5 col-12 col-md-8 col-xxl-7 d-flex flex-column justify-content-md-between">
		// 						<div>
		// 							<h2 className="josefinSans-text text-dark">
		// 								<span className="text-black fs-1">Welcome to</span>
		// 								<br></br>
		// 								<span className="fw-bold hero-header-font">Birmingham Chiropractic</span>
		// 							</h2>
		// 							<p className="fw-bold fs-3">Excellence in Patient Care Since 2012</p>
		// 							<p className="fs-5 d-none d-lg-block">
		// 								Evidence based and Individually tailored treatment programs.
		// 								<span className="fw-bold">Get back to doing what you love.</span>
		// 							</p>
		// 						</div>
		// 						<div>
		// 							<a target="_blank" href={state.bookingUrl} className="d-none d-md-block btn btn-lg btn-dark p-3">
		// 								Make an Appointment Today!
		// 							</a>
		// 							<a target="_blank" href={state.bookingUrl} className="d-md-none btn btn-dark p-2">
		// 								Make an Appointment Today!
		// 							</a>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>

		<section>
			<div>
				<div className="container-fluid">
					<div>
						<div className="row">
							<div className="col-6 d-flex align-items-center">
								<div className="p-2">
									<div className="border-bottom">
										<h2 className="josefinSans-text text-dark">
											<span className="text-black fs-1">Welcome to</span>
											<br></br>
											<span className="fw-bold hero-header-font">Birmingham Chiropractic</span>
										</h2>
										<p className="fw-bold fs-3">Excellence in Patient Care Since 2012</p>
										<p className="fs-5 d-none d-lg-block">
											Evidence based and Individually tailored treatment programs.
											<span className="fw-bold">Get back to doing what you love.</span>
										</p>
									</div>

									<div>
										<div>
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

										<div>
											<div id="carouselTestimonialSlides" className="carousel carousel-dark slide my-1" data-bs-ride="carousel">
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
															<div className="d-flex align-items-center" style={{}}>
																<div className="">
																	<div className="px-4 px-lg-5 pt-1 pb-3">
																		<div className="position-relative" style={{ right: "20px" }}>
																			<FontAwesomeIcon className="fs-5 text-black" icon={solid("quote-left")} />
																		</div>
																		<div className="fs-5">
																			<figure className="row">
																				<div className="col-12 col-9">
																					<blockquote style={{maxHeight: "100px"}} className="px-1 fs-6 overflow-auto slim-scroll">
																						<em className="">{testimonial.text.text}</em>
																					</blockquote>
																				</div>
																				<div className="col">
																					<div className="d-flex align-items-center ms-lg-4 ms-2">
																						<div className="me-3">
																							<a href={testimonial.googleMapsUri} target="_blank">
																								<img width="40" alt="Google logo" src={google}></img>
																							</a>
																						</div>
																						<figcaption className="blockquote-footer my-2">
																							{testimonial.authorAttribution.displayName}
																							<br></br>
																							<em className="fs-6">
																								{testimonial.relativePublishTimeDescription}
																							</em>
																						</figcaption>
																					</div>
																					<div className="ms-lg-3">
																						<div className="d-flex">
																							{new Array(testimonial.rating).fill(0).map((it, index) => (
																								<div key={index}>
																									<FontAwesomeIcon
																										className="fs-6 text-warning"
																										icon={solid("star")}
																									/>
																								</div>
																							))}
																						</div>
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
											</div>
										</div>
									</div>

									<div>
										<a target="_blank" href={state.bookingUrl} className="d-none d-md-block btn btn-lg btn-dark p-3">
											Make an Appointment Today!
										</a>
										<a target="_blank" href={state.bookingUrl} className="d-md-none btn btn-dark p-2">
											Make an Appointment Today!
										</a>
									</div>
								</div>
							</div>
							<div className="col-6 p-0 text-end ">
								<img className="img-fluid" src={hero4}></img>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
