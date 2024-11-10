function WhatWeDoContent({ it }) {
    return (
        <div>
            <div className="fs-3">
                <div className="d-block d-lg-none">
                    <div className="row">
                        <div className="col-12 col-xl-6">
                            <div>{it.text.p1}</div>
                        </div>
                        <div className="col-12 col-xl-6">
                            <div className="">
                                <img className="img-fluid white-border shadow" src={it.image2}></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-none d-lg-block">
                    <div className="m-3" style={{ float: "right", width: "50%" }}>
                        <div >
                            <img className="img-fluid white-border shadow" src={it.image2}></img>
                        </div>
                    </div>
                    <div>{it.text.p1}</div>
                </div>

                <div className="mt-2">{it.text.p2}</div>
            </div>
        </div>
    );
}

export default WhatWeDoContent;
