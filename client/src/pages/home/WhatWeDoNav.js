import foot from "../../images/foot.png";
import spine from "../../images/spine-model-.jpg";
import runner from "../../images/woman-running.jpg";
import team from "../../images/team.jpg";
import contact from "../../images/phone.jpg";
import testimonials from "../../images/new-imgs/thumbUp.png";
import LinkCard from "./LinkCard";

function WhatWeDoNav() {
  const cards = [
    {
      image: foot,
      altText: "foot print in the sand",
      text: "Orthotics",
      key: "Orthotics",
    },
    {
      image: spine,
      altText: "spine",
      text: "Chiropractic",
      key: "Chiropractic",
    },
    {
      image: runner,
      altText: "runner",
      text: "Sports Remedial",
      key: "sports",
    },
    {
      image: team,
      altText: "Doctor",
      text: "Meet the Team",
      key: "meetTeam",
      link: "the-team",
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
    <div className="container-md my-5 pb-5">
      <div className="row gy-3">
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

export default WhatWeDoNav;
