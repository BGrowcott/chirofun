function WhatWeDoContent({ it }) {
    return (
        <article>
            <div style={{ fontSize: "1.2em" }}>
                <div className="d-block d-xl-none">
                    <div className="row">
                        <div className="col-12">
                            <div>{it.text.p1}</div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className={it.image3 ? "col-12 col-md-6" : "col-12"}>
                                    <img className="img-fluid white-border shadow" src={it.image2} alt={it.image2Alt}></img>
                                </div>
                                <div className="col-12 col-md-6">
                                    {it.image3 ? <img className="img-fluid white-border shadow mt-2 mt-md-0" src={it.image3} alt={it.image2Alt}></img> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-none d-xl-block">
                    <div className="m-3" style={{ float: "right", width: `${it.image3 ? "42.5%" : "55%"}` }}>
                        <div >
                            <img className="img-fluid white-border shadow" src={it.image2} alt={it.image2Alt}></img>
                            {it.image3 ? <img className="img-fluid white-border shadow mt-2" src={it.image3} alt={it.image2Alt}></img> : null}
                        </div>
                    </div>
                    <div>{it.text.p1}</div>
                </div>

                <div className="mt-2">{it.text.p2}</div>
            </div>
        </article>
    );
}

export default WhatWeDoContent;
