function LinkCard({ image, altText, text }) {
  return (
    <div className=" link-card position-relative text-center text-white fs-4">
      <img src={image} className="card-img-top" alt={altText} />
      <div className="link-card-cover z-1 position-absolute d-flex align-items-end justify-content-center bottom-0 start-0 w-100 h-100">
        <div className="link-card-text w-100">{text}</div>
      </div>
    </div>
  );
}

export default LinkCard;
