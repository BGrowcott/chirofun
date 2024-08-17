import team from "../images/team.jpg";
import contact from "../images/phone.jpg";
import testimonials from "../images/testi.jpg";
import LinkCard from "./LinkCard";

function OtherInfoNav() {
    // TODO: flesh out alt text
    const cards = [
        { image: team, altText: "Doctor", text: "Meet the Team", key: "meetTeam" },
        { image: testimonials, altText: "Testimonials", text: "Testimonials", key: "Testimonials" },
        { image: contact, altText: "Contact Us", text: "Contact Us", key: "contact" },
    ];

    return (
        // TODO: Make all images the same size by editing the images themselves
        <div className="row">
            {cards.map((it) => (
                <div className="col-12 col-md-4" key={it.key}>
                    <LinkCard
                        image={it.image}
                        text={it.text}
                        altText={it.altText}
                    ></LinkCard>
                </div>
            ))}
        </div>

        // <div className="row links">
        //     <div className="col d-flex flex-column align-items-center justify-content-center">
        //         <div
        //             className="homepage-links"
        //             src={team}
        //             style={{ backgroundImage: `url(${team})` }}
        //             alt="Doctor"
        //         ></div>
        //         <p className="link-text">Meet the team</p>
        //     </div>
        //     <div className="col d-flex flex-column align-items-center justify-content-center">
        //         <div
        //             className="homepage-links"
        //             src={testimonials}
        //             style={{ backgroundImage: `url(${testimonials})` }}
        //             alt="Doctor"
        //         ></div>
        //         <p className="link-text">Testimonials</p>
        //     </div>
        //     <div className="col d-flex flex-column align-items-center justify-content-center">
        //         <div
        //             className="homepage-links"
        //             src={contact}
        //             style={{ backgroundImage: `url(${contact})` }}
        //             alt="Doctor"
        //         ></div>
        //         <p className="link-text">Contact us</p>
        //     </div>
        // </div>
    );
}

export default OtherInfoNav;
