import React from "react";
import "./styles/insights.scss";

function Insights({ id }) {

    return (
        <section id={id}>
            <div className="insights-container">
                <div className="section-title">
                    <span className="eyebrow">Insights</span>
                    <h2 className="title">Ideas, trends & strategies</h2>
                    <p className="subtitle">
                        Explore our latest thinking on strategy, finance, and execution.
                        Practical content designed to inspire action.
                    </p>
                </div>

                <div className="insights-grid">
                    <article className="insight-card">
                        <h3 className="card-title">Scaling smart in uncertain markets</h3>
                        <p className="card-text">
                            How to expand operations while keeping your risk profile in check.
                        </p>
                    </article>
                    <article className="insight-card">
                        <h3 className="card-title">Funding strategies that last</h3>
                        <p className="card-text">
                            Investor-ready roadmaps that balance ambition with resilience.
                        </p>
                    </article>
                    <article className="insight-card">
                        <h3 className="card-title">Turning data into execution</h3>
                        <p className="card-text">
                            Why analysis alone isn’t enough—and how to act on insights faster.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Insights;
