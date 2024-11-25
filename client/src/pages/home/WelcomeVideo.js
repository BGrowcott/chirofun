import vid from "../../images/welVid.mp4";

function WelcomeVideo() {
	return (
		<>
			<div className="p-3 m-auto">
				<div className="d-flex justify-content-center">
					<video controls className="mw-100 shadow white-border">
						<source src={vid} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</>
	);
}

export default WelcomeVideo;
