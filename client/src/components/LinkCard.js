function LinkCard({ image, altText, text }) {
  return (
    <div className="link-card text-center text-white fs-2 shadow-lg">
      <img src={image} className="card-img-top" alt={altText} />
      <div className="link-card-cover z-1 position-absolute d-flex align-items-end justify-content-center bottom-0 start-0 w-100 h-100">
        <div
          style={{ backgroundColor: "#1a1a1ab8" }}
          className="link-card-text w-100 h-100 d-flex justify-content-center align-items-center"
        >
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default LinkCard;
