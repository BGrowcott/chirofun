import austin from "../../images/austinFull.jpg";
import austin4 from "../../images/austin4.jpeg";
import claire from "../../images/Claire.jpg";
import adrian from "../../images/Adrian.jpg";
import TeamCard from "./TeamCard";
import React, { useEffect } from "react";

import PageHeader from "../../components/utils/PageHeader";
import PageContainer from "../../components/utils/PageContainer";
import ContentBox from "../../components/utils/ContentBox";

function MeetTheTeam() {
    useEffect(() => {
        document.title = "Meet The Team - Birmingham Chiropractic";
    }, []);

    const teamMembers = [
        {
            title: "Dr Austin Everill - MChiro DC",
            summary: "Restore Wellness and Elevate Your Health.",
            image: austin4,
            alt: "Dr Austin Everill portrait, he is standing and smiling. His arms are crossed and he is wearing medical scrubs. He looks professional and approachable",
            textHtml: (
                <>
                    <p>
                        Austin has years of experience working with a wide range of patients. He believes that given the right advice and help most people can live a healthy life without back pain.{" "}
                        <strong>It doesn't matter what your age or background.</strong>
                    </p>
                    <p>
                        <em>"Back pain is not a normal part of ageing, although too many people think it is. Regardless of age you can benefit from treatment."</em>
                    </p>
                    <p>
                        Austin completed his 5 year professional Chiropractic degree in Oxford - fully qualified Doctor of Chiropractic and registered with the General Chiropractic Council. Austin is
                        a keen runner but after a recurring back problem he had to stop his favourite sport. Two years of back pain continued with no resolution - a visit to the Chiropractor finally
                        helped get him running again. He is passionate about getting his patients back to a pain free life and <strong>returning to the activities they love.</strong>
                    </p>
                </>
            ),
        },

        {
            title: "Claire Corfield - Yoga Teacher",
            summary: "Heal, Strengthen, Transform.",
            image: claire,
            alt: "Portrait of Claire Corfield. Claire is standing with her arms crossed, wearing a black top. She appears friendly and welcoming",
            textHtml: (
                <>
                    <p>
                        Claire completed her 200-hour yoga teacher training in September 2016. Since then, she has taught in many studios across Birmingham, including I Am Yogi in Moseley and Yoga
                        Borne in Stirchley.
                    </p>
                    <p>
                        Claire originally came to yoga due to neck and back pain and quickly noticed how much yoga helped. During this time Claire also received regular chiropractic treatments and,
                        combined with her yoga practice, has been pain-free since.
                    </p>
                    <p>Along with Chiropractic, Yoga is recommended by the National Institute of Clinical Excellence as part of a first basis approach to Back Pain care.</p>
                    <p>
                        Claire knows how daunting it can feel to start yoga but her friendly, fun approach to teaching puts even the most anxious student at ease. Her classes often encourage
                        strengthening as well as lengthening muscles, and her anatomy knowledge also means mobility drills are often added to her yoga sequencing. Claire specialises in Yoga Nidra, a
                        deeply relaxing, guided meditation technique, that is <strong>suitable for all levels.</strong>
                    </p>

                    <p><a className="text-dark fw-bold" href="https://bookwhen.com/clairecorfieldyoga" target="_blank">Book here for Yoga Nidra</a></p>
                </>
            ),
        },
        {
            title: "Pete Mander - Sports Massage Therapist",
            summary: "Relieve. Recover. Perform Better.",
            image: adrian,
            alt: "Portrait of Pete Mander. Pete is standing with his arms crossed, wearing a black top. Pete looks fit and sporty. He is smiling and looks friendly.",
            textHtml: (
                <>
                    <p>
                        Pete graduated from University College Birmingham with a BSc Hons Degree in Sports Therapy in 2012. He has over 10 years of experience working as a sports massage therapist and
                        is a member of the Federation of Holistic Therapists.
                    </p>
                    <p>
                        Sports massage is <em>not</em> just for the active sportsperson. Whether you are a stay-at-home parent, have an office-based job, or are a manual worker, Pete will use his
                        knowledge and understanding to provide effective and beneficial treatment for all individuals. Using various massage techniques, Pete will aim to correct problems and
                        imbalances in soft tissue structures caused by trauma, repetitive movements or physical activity. In doing so, Pete aims to bring his clients back to the optimal levels of
                        functional, occupational and sports-specific fitness - <strong>regardless of age and ability.</strong>
                    </p>
                    Benefits of Sports Massage: Reduced muscle tension, improved circulation, injury prevention, improved recovery, pain management, enhanced performance, stress relief.
                </>
            ),
        },
    ];

    return (
        <PageContainer>
            <PageHeader text={"Our Team"}></PageHeader>
            <ContentBox>
                {teamMembers.map((teamMember, index, array) => (
                    <div className={`my-2 py-1 ${index === 0 ? "mt-0 pt-0" : ""} ${index === array.length - 1 ? "mb-0 pb-0" : ""}`} key={teamMember.title}>
                        <TeamCard teamMember={teamMember}></TeamCard>
                    </div>
                ))}
            </ContentBox>
        </PageContainer>
    );
}

export default MeetTheTeam;
