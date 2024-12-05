import React from "react";

function TeamCard({ teamMember }) {
    const { title, summary, image, textHtml, alt } = teamMember;

    return (
        <div className="shadow white-border bg-offLight">
            <div>
                <div className="d-none d-sm-block">
                    <div style={{ minHeight: "584px" }}>
                        <div>
                            <div className="float-end ps-3" style={{ width: "40%" }}>
                                <img className="img-fluid max-width border border-5" src={image}></img>
                            </div>
                        </div>
                        <div className="p-1 p-md-4">
                            <h2 className="main-font text-dark fw-bold josefinSans-text mb-1">{title}</h2>
                            <p className="fs-4 fw-bold mb-3">{summary}</p>
                            <div className="" style={{ fontSize: "1.2em" }}>
                                {textHtml}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-block d-sm-none">
                    <div className="container">
                        <div className="row flex-column-reverse flex-lg-row">
                            <div className="col-12 col-lg-7 p-1 p-md-4 d-flex flex-column justify-content-center">
                                <h2 className="main-font text-dark fw-bold josefinSans-text mb-1">{title}</h2>
                                <p className="fs-4 fw-bold mb-3">{summary}</p>
                                <div className="" style={{ fontSize: "1.2em" }}>
                                    {textHtml}
                                </div>
                            </div>

                            <div className="col-12 col-lg-5 p-0">
                                <div className="">
                                    <img alt={alt} className="img-fluid max-width border border-4" src={image}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
