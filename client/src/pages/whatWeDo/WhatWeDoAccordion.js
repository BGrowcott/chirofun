import WhatWeDoContent from "./WhatWeDoContent";

function WhatWeDoAccordion({ therapyTypes }) {
	const scrollControl = function (event) {
		const element = event.target;
		element.scrollIntoView({ behaviour: "instant" });
	};

	return (
		<div>
			<div className="accordion accordion-flush" id="accordionWhatWeDo">
				{therapyTypes.map((it, index) => {
					return (
						<div className="accordion-item" key={it.title}>
							<h2 className="accordion-header">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target={`#accord-${it.therapyTypeCode}`}
									aria-expanded="false"
									aria-controls={`accord-${it.therapyTypeCode}`}
								>
									<img className="image-fluid border border-secondary border-3 shadow me-3" src={it.image} width={120}></img>
									<span className="text-dark fs-3 fw-bold josefinSans-text">{it.title}</span>
								</button>
							</h2>
							<div id={`accord-${it.therapyTypeCode}`} className={`accordion-collapse collapse`}>
								<div className="accordion-body p-2 p-md-4">
									<WhatWeDoContent it={it}></WhatWeDoContent>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default WhatWeDoAccordion;
