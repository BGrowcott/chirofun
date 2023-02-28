import image01 from "../images/InstaFood-01.jpg";
import image02 from "../images/InstaFood-02.jpg";
import image03 from "../images/InstaFood-03.jpg";
import image04 from "../images/InstaFood-04.jpg";
import portrait from "../images/ossieHimself.jpg";

const Home = () => {
    const images1 = [image01, image02, image03, image04];

    const images2 = [image01, image02, image03, image04].reverse();

    return (
        <section className="row g-2">
            <div className="col-12 col-md-3">
                <div
                    id="profile"
                    className="rounded bg-light border p-2 d-flex flex-column justify-content-between align-items-center"
                >
                    <h1 id="nameHeading" className="text-center">
                        Ossie Goldhill
                    </h1>
                    <img id="portrait" src={portrait}></img>
                    <p className="mt-2">
                        I specialise in creating food-centric content. Working
                        with clients from small independent restaurants to
                        national broadcasters.
                    </p>
                </div>
            </div>

            <div className="col-12 col-md-9">
                <div className="row g-2">
                    <div className="col-12 col-md-6">
                        {images1.map((image, index) => {
                            return (
                                <div className="pb-2" key={index}>
                                    <img className="img-fluid border" src={image} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="col-12 col-md-6">
                        {images2.map((image, index) => {
                            return (
                                <div className="pb-2" key={index}>
                                    <img className="img-fluid border" src={image} />
                                </div >
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
