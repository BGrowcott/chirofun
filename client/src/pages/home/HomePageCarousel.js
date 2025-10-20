const HomePageCarousel = ({ id: carouselId, images }) => {
	return (
		<div>
			<div className="d-none d-md-flex">
				{images.map((item, index, array) => {
					return <img key={item.alt} style={{width: `${1/array.length*100}%`}} className={index !==0 || index !== array.length -1 ? `border-start border-end border-2 border-white` : ""} src={item.image} alt={item.alt}></img>;
				})}
			</div>
			<div className="d-flex d-md-none">
				<div id={carouselId} className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-inner">
						{images.map((item, index) => {
							return (								
								<div key={item.alt} className={`carousel-item ${item.active ? "active" : ""}`}>
									<img src={item.image} className={`d-block w-100`} alt={item.alt} />
								</div>
							);
						})}
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default HomePageCarousel;
