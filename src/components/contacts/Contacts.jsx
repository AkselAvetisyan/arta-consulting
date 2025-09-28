import React from "react";
import "./styles/contact.scss";

function Contacts({id}) {

    return (
        <section id={id}>
            <div className="gradient-bar" />

            <section>

                <div className="content">
                    <form className="form" onSubmit={(e) => e.preventDefault()}>
                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="name">Full name</label>
                                <input id="name" name="name" type="text" placeholder="Jane Doe" required />
                            </div>
                            <div className="field">
                                <label htmlFor="company">Company</label>
                                <input id="company" name="company" type="text" placeholder="Acme LLC" />
                            </div>
                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" type="email" placeholder="you@company.com" required />
                            </div>
                            <div className="field">
                                <label htmlFor="phone">Phone</label>
                                <input id="phone" name="phone" type="tel" placeholder="+374 ..." />
                            </div>
                        </div>

                        <div className="message">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Tell us about your project, timeline, and goals."
                                required
                            />
                        </div>

                        <button type="submit" className="submit">Send Message</button>
                        <p className="disclaimer">By sending, you agree to our privacy policy.</p>
                    </form>

                    {/* Info side */}
                    <div className="info">
                        <div className="card">
                            <h4>Get in touch</h4>
                            <div className="contact-list">
                                <p>info@artaconsulting.com</p>
                                <p>+374 XX XXX XXX</p>
                                <p>Yerevan, Armenia</p>
                            </div>
                            <a href="https://calendly.com/" target="_blank" rel="noopener" className="calendly-btn">
                                Book via Calendly
                            </a>
                        </div>

                        <div className="card">
                            <h4>Why clients choose ARTA</h4>
                            <ul>
                                <li>• Investor-grade modeling & documentation</li>
                                <li>• Clear milestones and governance</li>
                                <li>• Fast diagnostics → actionable roadmaps</li>
                                <li>• Practical training to sustain results</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Contacts;
