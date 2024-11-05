function MapAndOpeningTimes() {
  const openingTimes = [
    "Monday: 9am-7pm",
    "Tuesday: 9am-7pm",
    "Wednesday: Closed",
    "Thursday: 9am-7pm",
    "Friday: 9am-2pm",
    "Saturday: 9am-2pm",
    "Sunday: Closed",
  ];

  return (
    <>
      {/* TODO: Make this into it's own component */}
      <div className="container-md">
        <div className="row my-5">
          {/* <hr></hr> */}
          <div className="col-12 col-xl-9">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11244.49265846336!2d-1.900553370694333!3d52.422444694535756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc0e681a7553%3A0x84836f9f82fbb006!2sBirmingham%20Chiropractic!5e0!3m2!1sen!2suk!4v1724069357491!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-12 col-xl-3 mt-5 mt-xl-0">
            <div className="text-center">
              <span className="fw-bold fs-4">Opening Hours</span>
              <ul className="list-group list-group-flush fs-5">
                {openingTimes.map((it, index) => (
                  <li className="list-group-item bg-light" key={it}>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MapAndOpeningTimes;
