import migrainePoster from "../../images/new-imgs/migrainePoster.jpeg";

function MigraineTreatment() {
	return (
		<section className="container-md" >
			<div className="py-2 py-lg-5">
				<div className="row">
					<div className="col-12 col-lg-6 d-flex justify-content-center">
						<div className="rounded d-flex flex-column justify-content-center ">
							<h3 className="we-do-h3 fw-bold josefinSans-text text-dark">Migraine Treatment</h3>
							<p className="fs-3 lh-lg fw-bold mb-3 mb-lg-3">Can a chiropractor treat migraines?</p>
							<div className="fs-4">
								<p>
									Chiropractors can help treat migraines by using spinal adjustments, particularly focusing on the neck and upper spine. These
									adjustments aim to improve spinal function, relieve tension, and reduce nerve irritation, which can sometimes contribute to
									migraine symptoms.
								</p>
								<p>
									Many patients report reduced frequency or intensity of migraines with chiropractic care, though results can vary. It's best
									to consult with both a chiropractor and a medical doctor to determine if this treatment approach is suitable for your
									specific case.
								</p>
							</div>
							<div className="fw-bold fs-4 ms-5">
								<div>
									<a className="text-dark" href="#">- Link to source 1</a>
								</div>
								<div>
									<a className="text-dark" href="#">- Link to source 2</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
						<img className="img-fluid white-border shadow" src={migrainePoster}></img>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MigraineTreatment;
