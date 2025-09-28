import React from "react";
import "./styles/services.scss";
import SERVICES from "@/components/services/data/SERVICES";

function Services({ id }) {

    return (
        <section id={id}>
            <div className="services-container">
                <div className="section-title">
                    <span className="eyebrow">What we do</span>
                    <h2 className="title">Services built to create measurable outcomes</h2>
                    <p className="subtitle">
                        Four interlinked practices that move your business from assessment to execution.
                    </p>
                </div>

                <div className="services-grid">
                    {SERVICES.map((s) => (
                        <div key={s.title} className="service-card">
                            <div className="service-icon">
                                <s.icon size={24} />
                            </div>
                            <h3 className="service-title">{s.title}</h3>
                            <p className="service-text">{s.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
