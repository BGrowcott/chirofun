import migrainePoster from "../../images/migrainePoster.jpeg";
import migraineImage1 from "../../images/migraine1.jpg";

function MigraineTreatment() {
	return (
		<section className="container-md">
			<div className="py-2 py-lg-5">
				<div className="row flex-column-reverse flex-lg-row">
					<div className="col-12 col-lg-6 d-flex justify-content-center">
						<div className="rounded d-flex flex-column justify-content-center ">
							<div>
								<h3 className="we-do-h3 fw-bold josefinSans-text text-dark">Say Goodbye to Migraines</h3>
								<div className="d-block d-lg-none">
									<div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
										<img
											className="img-fluid white-border shadow"
											src={migraineImage1}
											alt="A woman holds her head in pain as she experiences a migraine."
										></img>
									</div>
								</div>
								<p className="fs-3 lh-lg fw-bold mb-3 mb-lg-3">Are you struggling with chronic migraines?</p>
							</div>
							<div className="fs-4">
								<p>
									We offer the latest, clinically proven treatment recommended by <strong>The NICE Institute</strong> (National Institute of
									Clinical Excellence). Using very precise injections, this new technique reduces the hyperactivity of specific nerves that
									cause a migraine.
								</p>
								<p>
									This safe and effective procedure involves using fine needles administered by our highly trained and qualified staff. Our
									clinic prioritises your health and comfort, striving to make this cutting-edge treatment affordable and accessible. Don't
									let migraines control your life - take the first step towards relief today.
								</p>
								<p className="fw-bold">Book your consultation now and experience the difference!</p>
							</div>
						</div>
					</div>
					<div className="d-none d-lg-block col-12 col-lg-6">
						<div className="d-flex flex-column justify-content-center align-items-center">
							<img
								className="img-fluid white-border shadow"
								src={migraineImage1}
								alt="A woman holds her head in pain as she experiences a migraine."
							></img>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MigraineTreatment;
