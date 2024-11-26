import PageHeader from "../../components/utils/PageHeader";
import React, { useEffect } from "react";

function PrivacyPolicy() {

	useEffect(() => {
        document.title = "Birmingham Chiropractic - Privacy Policy";
    }, []);

	return (
		<section className="border-top border-1 border-secondary">
			<div className="container-lg">
				<PageHeader text={"Privacy Policy"}></PageHeader>
				<div className="mt-5">
					<p>
						<strong>Birmingham Chiropractic</strong> is dedicated to safeguarding your privacy and the information you share.
					</p>

					<p>
						This privacy notice informs you how we collect and use your personal information. It concerns the Data Protection Act 2018, including
						the General Data Protection Regulation.
					</p>

					<p> As Chiropractors, we need to store and process personal information for the following reasons:</p>

					<ol>
						<li>
							To provide the best level of care for our patients we need to collect personal information. We enter into a contract when you
							request treatment, and we agree to provide that treatment. This contract is termed a <strong>‘legitimate interest’</strong> as
							without this contract we could not carry out our duty of care safely and effectively.
						</li>
						<li>
							Furthermore, we need to contact you to inform you of matters related to your medical care. This may be by phone, email or text and
							is specific to your treatment. For example, we may send you an email related to your appointment times with us. This communication
							is also an aspect of legitimate interest but specifically your legitimate interest.
						</li>
					</ol>

					<p>
						Other medical professionals, such as your GP, can request files, but only with your consent and only about your medical care. This is
						part of legitimate interest, and we comply with the guidlines set out in the Data Protection Act 2018.
					</p>

					<p>We do not use your data for advertising purposes.</p>

					<p className="fw-bold fs-5">The Information We Collect</p>

					<p>To provide you with effective care, we need to collect;</p>

					<p>Personal information such as your name, address, date of birth, gender.</p>
					<p>General information about your health and employment status, how best to contact you.</p>

					<p>We will also occasionally need to process reports and invoices.</p>

					<p className="fw-bold fs-5">How We Store Your Information</p>

					<p>
						Our paper files are stored in locked filing cabinets in a secure location. The Clinic is locked and alarmed out of working hours. Our
						computers are password protected and our booking system provider complies with the GDP Regulations. All data collected electronically is
						protected as private data In comlpliance with security protocol for Internet and iCloud storage.
					</p>

					<p className="fw-bold fs-5">Who has access to your data</p>

					<p>
						The main person in charge of storing and processing your data is called the Data Controller. For this Clinic it is Austin Everill. (You
						can contact Austin in regard to any questions about storage of your personal information or if you are unhappy with the way your data is
						being stored. Contact: info@birminghamchiropractic.uk.com or Phone: 0121 792 1245 Address: 264 Alcester Road South, Birmingham, B14 6DR.
						If you are still unhappy with the way your data is being stored or processed you can contact the Information Commissioners Office.{" "}
					</p>

					<p>The Data Controller is registered with Information Commissioners Office- ISO: Reg no. ZA362216.</p>

					<p>The receptionist at the clinic and specific administration staff have authorised access your data at specific times.</p>

					<p>
						You have the right to access the personal data that we hold on you at any time and can request that we erase your medical records after
						the legal time limit has elapsed in accordance with GDP regulations (patients records for those 16 years and over must by law be kept
						for 8 years, under 16 years until the patient is 25 years old).
					</p>
				</div>
			</div>
		</section>
	);
}

export default PrivacyPolicy;
