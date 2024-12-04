import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MapAndOpeningTimesFoot() {
    const openingTimes = ["Monday: 9am - 7pm", "Tuesday: 9am - 7pm", "Wednesday: Closed", "Thursday: 9am - 7pm", "Friday: 9am - 2pm", "Saturday: 9am - 2pm", "Sunday: Closed"];

    return (
        <>
            <div>
                <div className="row  align-items-center">
                    <div className="col-12 col-lg-3 col-xl-3">
                        <div className="text-center">
                            <div className="card bg-dark border-0">
                                <div className="card-header click-sm bg-dark" data-bs-toggle="collapse" data-bs-target="#openingHoursList">
                                    <div className="fw-bold fs-4 text-lg-start text-white">
                                        <span className="d-none d-lg-inline"><FontAwesomeIcon className="fs-3" icon={solid("clock")} /></span> 
                                        <span className="mx-3">Opening Hours</span>
                                        <span className="d-lg-none"><FontAwesomeIcon className="fs-4" icon={solid("chevron-down")}/></span>
                                    </div>
                                </div>
                                <div className="card-body p-0">

                                    {/*display on small screens*/}
                                    <div className="d-block d-lg-none">
                                        <div className="collapse" id="openingHoursList">
                                            <ul className="list-group list-group-flush text-lg-start">
                                                {openingTimes.map((it, index) => (
                                                    <li className="list-group-item bg-dark text-white" key={it}>
                                                        {it}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/*display on bigger screens*/}
                                    <div className="d-none d-lg-block">
                                        <ul className="list-group list-group-flush text-lg-start">
                                            {openingTimes.map((it, index) => (
                                                <li className="list-group-item bg-dark text-white" key={it}>
                                                    {it}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9 col-xl-6">
                        <div className="map-container white-border">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11244.49265846336!2d-1.900553370694333!3d52.422444694535756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc0e681a7553%3A0x84836f9f82fbb006!2sBirmingham%20Chiropractic!5e0!3m2!1sen!2suk!4v1724069357491!5m2!1sen!2suk"
                                width="100%"
                                height="100%"
                                style={{ border: "none" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="map and location for Birmingham Chiropractic"
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-12 col-lg-12 col-xl-3">
                        <div className="m-2 fw-bold fs-4 text-xl-end text-white"><span><FontAwesomeIcon className="fs-3" icon={solid("map-location-dot")} /></span> Address</div>
                        <div className="d-flex flex-column text-xl-end fs-5">
                            <address>
                                <p>
                                    Birmingham Chiropractic,
                                    <br />
                                    264 Alcester Rd South,
                                    <br />
                                    King's Heath,
                                    <br />
                                    Birmingham B14 6DR
                                </p>
                                <a className="text-white" href="tel:07898903772">
                                    07898 903772
                                </a>
                                <br></br>
                                <div className="d-md-block fs-6">
                                    <a className="text-white" href="mail:info@birminghamchiropractic.uk.com">
                                        info@birminghamchiropractic.uk.com
                                    </a>
                                </div>
                            </address>
                            <div className="d-block d-md-none mb-2">
                                <a role="button" target="_blank" href="https://www.fresha.com/a/birmingham-chiropractic-birmingham-264-alcester-road-south-xp8i2pdf/" className="btn btn-light btn-lg">Book Online</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MapAndOpeningTimesFoot;
