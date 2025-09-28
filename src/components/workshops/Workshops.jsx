import React from "react";
import "./styles/workshops.scss";

function Workshops({ id }) {

    return (
        <section id={id}>
            <div className="workshops-container">
                <div className="section-title">
                    <span className="eyebrow">Workshops</span>
                    <h2 className="title">Practical learning that sticks</h2>
                    <p className="subtitle">
                        Hands-on training sessions designed to equip teams with the skills
                        they need to execute strategies with confidence.
                    </p>
                </div>

                <div className="workshops-grid">
                    <div className="workshop-card">
                        <h3 className="card-title">Strategy Sprints</h3>
                        <p className="card-text">
                            Fast-paced, outcome-driven sessions that help teams align and
                            make critical business decisions.
                        </p>
                    </div>
                    <div className="workshop-card">
                        <h3 className="card-title">Financial Modeling</h3>
                        <p className="card-text">
                            Build robust, driver-based financial models and learn to run
                            sensitivity and scenario analysis.
                        </p>
                    </div>
                    <div className="workshop-card">
                        <h3 className="card-title">Execution Playbooks</h3>
                        <p className="card-text">
                            Step-by-step guides to help your teams turn strategies into
                            measurable results.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Workshops;
