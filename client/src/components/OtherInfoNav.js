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
    { image: team, altText: "Doctor", text: "Meet the Team", key: "meetTeam" },
    {
      image: testimonials,
      altText: "Testimonials",
      text: "Testimonials",
      key: "Testimonials",
    },
    {
      image: contact,
      altText: "Contact Us",
      text: "Contact Us",
      key: "contact",
    },
  ];

  // return (
  //   <div className="container-md my-5 px-0 py-5">
  //     <div className="row">
  //       <div className="col-md-6 col-sm-12 p-0 other-info-img">
  //         <img className="h-100 w-100 mx-3 shadow-lg" src={currentImage} />
  //       </div>
  //       <div className="col-md-6 ps-5 col-sm-12">
  //         <div
  //           className="other-info-containers mb-4 ps-3"
  //           onMouseEnter={() => handleHover(team)}
  //         >
  //           <div className="fs-1 fw-bold text-dark josefinSans-text">
  //             Meet the Team
  //           </div>
  //           <p className="fs-4">
  //             Get to know our experienced and friendly team of chiropractors who
  //             are dedicated to providing you with personalized care.
  //           </p>
  //         </div>
  //         <div
  //           className="other-info-containers mb-4 ps-3"
  //           onMouseEnter={() => handleHover(contact)}
  //         >
  //           <div className="fs-1 text-dark fw-bold josefinSans-text">
  //             Contact Us
  //           </div>
  //           <p className="fs-4">
  //             Have questions or ready to schedule an appointment? Contact us
  //             today and our team will assist you promptly.
  //           </p>
  //         </div>
  //         <div
  //           className="other-info-containers ps-3"
  //           onMouseEnter={() => handleHover(testimonials)}
  //         >
  //           <div className="fs-1 text-dark fw-bold josefinSans-text">
  //             Testimonials
  //           </div>
  //           <p className="fs-4">
  //             Read what our patients have to say about their experiences with
  //             our chiropractic services and how we have helped them improve
  //             their health.
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

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
            ></LinkCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherInfoNav;
