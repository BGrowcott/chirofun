import building from "../images/new-imgs/building-sign.jpg";
import WhatWeDoNav from "./WhatWeDoNav";

function WhatWeDo() {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-12 col-md-6">
          <div className="p-3">
            <h3 className="fw-bold text-center">What we do</h3>
            <p className="fs-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lacinia, sapien a consectetur sodales, metus lorem faucibus est,
              sit amet facilisis dolor tortor a nisi. Integer pulvinar odio a
              nisi facilisis, et rutrum neque commodo. Donec id finibus ligula.
              Duis a elit dapibus, laoreet ipsum sit amet, mollis justo.
              Vestibulum leo sapien, rutrum ac augue eget, imperdiet tempor
              sapien. Ut pellentesque odio at erat scelerisque varius.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 d-none d-md-block">
          <img className="img-fluid" src={building} alt="Building"></img>
        </div>
      </div>
      <hr></hr>

      <WhatWeDoNav></WhatWeDoNav>
    </div>
  );
}

export default WhatWeDo;
