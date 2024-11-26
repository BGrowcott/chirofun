function PageHeader({ text }) {
	return (
		<>
			<div className="mt-2 mt-md-4 mt-sm-3 josefinSans-text">
				<div className="border-bottom border-4 border-warm w-100">
					<h1 className="about-header mt-1 mt-md-3 mt-sm-2 fw-bold text-dark">{text}</h1>
				</div>
			</div>
		</>
	);
}

export default PageHeader;
