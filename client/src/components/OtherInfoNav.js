import team from "../images/team.jpg";
import contact from "../images/phone.jpg";
import testimonials from "../images/new-imgs/thumbUp.png";
import LinkCard from "./LinkCard";
import { useState } from "react";

function OtherInfoNav() {
  const [currentImage, setCurrentImage] = useState(team);

  const handleHover = (image) => {
    setCurrentImage(image);
  };
  // TODO: flesh out alt text
  const cards = [
    {
      image: team,
      altText: "Doctor",
      text: "Meet the Team",
      key: "meetTeam",
      link: "/about",
    },
    {
      image: testimonials,
      altText: "Testimonials",
      text: "Testimonials",
      key: "Testimonials",
      link: "testimonials",
    },
    {
      image: contact,
      altText: "Contact Us",
      text: "Contact Us",
      key: "contact",
    },
  ];

  return (
    // TODO: Make all images the same size by editing the images themselves
    <div className="container-md my-5 pt-5">
      <div className="row gy-3 mb-5">
        {cards.map((it) => (
          <div className="col-12 col-md-4" key={it.key}>
            <LinkCard
              image={it.image}
              text={it.text}
              altText={it.altText}
              link={it.link}
            ></LinkCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherInfoNav;
