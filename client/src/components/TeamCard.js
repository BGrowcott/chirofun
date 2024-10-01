import React from "react";
import austin from "../images/new-imgs/austin.jpg";

function TeamCard({ teamImg }) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col ps-5 d-flex flex-column justify-content-center"
            style={{ backgroundColor: "#F0EFEF" }}
          >
            <h2 className="main-font text-dark fw-bold josefinSans-text mb-1">
              Dr Austin Everill - MChiro DC
            </h2>
            <p className="fs-3 fw-bold mb-5">
              Something about being a chiropractor/owner
            </p>
            <p className="fs-4 pe-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum commodo libero consequat sapien egestas malesuada eget
              eu quam. Sed at feugiat mi. Curabitur odio velit, mollis a nibh
              eget, ultrices fringilla dolor. Cras ac commodo nunc. Vivamus
              efficitur nisl sed elit scelerisque, quis semper lorem tincidunt.
            </p>
          </div>

          <div className="col-5 p-0">
            <div>
              <img className="img-fluid max-width" src={teamImg}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
