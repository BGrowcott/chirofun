function LinkCard({ image, altText, text }) {
    return (
        <div className="card link-card">
            <img src={image} className="card-img-top" alt={altText} />
            <div className="card-body">
                <p className="card-text text-center fw-bold josefinSans-text fs-5">{text}</p>
            </div>
        </div>
    );
}

export default LinkCard;
