import Feature from "@/components/hero/components/Feature";
import './styles/hero.scss';
import {SECTIONS} from "@/main/constants/BASE_SECTIONS";

function Hero({ id }) {

    function scrollToSection(id) {
        const section = document.getElementById(id);
        section.scrollIntoView({behavior: "smooth"});
    }

    return (
        <section id={id}>
            <div className="gradient-bg" />
            <div className="container">
                <div className="hero-content">
                    <div className="badge">Strategy • Finance • Execution</div>
                    <h1>We turn analysis into action for ambitious businesses.</h1>
                    <p>
                        ARTA Consulting delivers data-driven consulting, workshops & training, business planning and feasibility studies, and comprehensive evaluation & financial recovery programs.
                    </p>
                    <div className="hero-buttons">
                        <button className="primary">
                            Book a 20‑min Consultation
                        </button>
                        <button className="secondary" onClick={() => { scrollToSection(SECTIONS.services) }}>
                            Explore Services
                        </button>
                    </div>
                </div>
                <div className="hero-features">
                    <div className="feature-card">
                        <div className="features-grid">
                            <Feature title="Sector‑ready" text="From SMEs to scale‑ups, tailored go‑to‑market and funding roadmaps." />
                            <Feature title="Financial depth" text="Driver‑based models, feasibility & scenario analysis you can trust." />
                            <Feature title="Training that sticks" text="Workshops that build in‑house capability across teams." />
                            <Feature title="Recovery toolkit" text="Diagnostic → action plan → cashflow stabilization → monitoring." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
