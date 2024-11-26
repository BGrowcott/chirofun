function PageContainer({ children }) {
	return (
		<section className="border-top border-1 border-secondary">
			<div className="container-xxl">
				<div className="p-md-3">{children}</div>
			</div>
		</section>
	);
}

export default PageContainer;
