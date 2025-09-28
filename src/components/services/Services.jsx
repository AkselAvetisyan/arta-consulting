import React from "react";
import { Briefcase, Presentation, FileBarChart2, Activity } from "lucide-react";
import "./styles/services.scss";

const SERVICES = [
    { Icon: Briefcase, title: "Consulting", text: "Strategy sprints, operating model design, market entry and growth programs aligned to KPIs." },
    { Icon: Presentation, title: "Workshops & Training", text: "Practical training for leadership and teams: finance for non-financial managers, OKRs, PM, and more." },
    { Icon: FileBarChart2, title: "Business Planning & Feasibility", text: "Investor-grade business plans, feasibility studies, and financial models with scenario stress-tests." },
    { Icon: Activity, title: "Business Evaluation & Financial Recovery", text: "Rapid diagnostics, turnaround plans, cashflow recovery, and monitoring dashboards." },
];

function Services() {
    return (
        <section id="services">
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
                                <s.Icon size={24} />
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
