import React, { useRef, useEffect } from 'react';
import vid from "../../images/welVid.mp4";

function WelcomeVideo() {

	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
		  videoRef.current.volume = 0.05; // Set default volume to 5%
		}
	  }, []); // Runs only once after the component mounts

	return (
		<>
			<div className="p-3 m-auto">
				<div className="d-flex justify-content-center">
					<video controls className="mw-100 shadow white-border" ref={videoRef}>
						<source src={vid} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</>
	);
}

export default WelcomeVideo;
