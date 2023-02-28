import image01 from "../images/InstaFood-01.jpg";
import image02 from "../images/InstaFood-02.jpg";
import image03 from "../images/InstaFood-03.jpg";
import image04 from "../images/InstaFood-04.jpg";

const Home = () => {
    const images = [
        image01,
        image02,
        image03,
        image04,
        image01,
        image02,
        image03,
        image04,
    ];

    return (
        <section className="row">
            <div className="col-12 col-md-3">
                <div>
                    <p>Kitchen + Restaurant Camerawork</p>
                    <p>Food Styling Services</p>
                </div>
            </div>

            <div className="col-12 col-md-9">
                <div className="row g-2">
                    {images.map((image, index) => {
                        return (
                            <div className="col-12 col-md-6">
                                <img
                                    className="img-fluid"
                                    key={index}
                                    src={image}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Home;
