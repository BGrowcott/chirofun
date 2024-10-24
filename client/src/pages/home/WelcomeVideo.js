import vid from "../../images/new-imgs/welVid.mp4";

function WelcomeVideo() {
	return (
		<>
			<div className="p-5">
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