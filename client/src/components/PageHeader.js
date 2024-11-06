function PageHeader({ text }) {
	return (
		<>
			<div className="mt-5 josefinSans-text">
				<div className="border-bottom border-4 border-warm w-100">
					<h1 className="about-header mt-5 fw-bold text-dark">{text}</h1>
				</div>
			</div>
		</>
	);
}

export default PageHeader;
