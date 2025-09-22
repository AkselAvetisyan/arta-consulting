// src/components/About.jsx
import React from "react";
import "./styles/about-us.scss";

function AboutUs() {
    return (
        <section id="about-us">
            <div className="about-container">
                <div className="section-title">
                    <span className="eyebrow">About us</span>
                    <h2 className="title">Who we are</h2>
                    <p className="subtitle">
                        We are a team of strategists, analysts, and operators dedicated to helping businesses
                        unlock measurable growth through sharp insights and execution.
                    </p>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            With deep expertise in consulting, business planning, and organizational development,
                            we work alongside leadership teams to design strategies that drive real outcomes.
                        </p>
                        <p>
                            From market entry planning to turnaround programs, we translate complex business
                            challenges into actionable solutions, always with your KPIs at the core.
                        </p>
                    </div>
                    <div className="about-image">
                        <img
                            src="/images/about-team.jpg"
                            alt="About our team"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
