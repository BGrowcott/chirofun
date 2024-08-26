import foot from "../images/foot.png";
import spine from "../images/spine-model-.jpg";
import runner from "../images/woman-running.jpg";
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
  ];

  return (
    <div className="container-md pb-5">
      <div className="row gy-3">
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
    </div>
  );
}

export default WhatWeDoNav;
