'use client'

import Layout from "@/components/custom-components/Layout";
import Contacts from "@/components/contacts/Contacts";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import AboutUs from "@/components/about-us/AboutUs";
import Workshops from "@/components/workshops/Workshops";
import Insights from "@/components/insights/Insights";
import './styles/home.scss';
import MotionSection from "@/components/custom-components/motion-section/MotionSection";

function HomePage() {

    return (
        <MotionSection transition={1} key={"home"} className="home">
            <Layout>

                <Hero/>
                <Services/>
                <AboutUs/>
                <Workshops/>
                <Insights/>
                <Contacts/>

            </Layout>
        </MotionSection>
    )
}

export default HomePage