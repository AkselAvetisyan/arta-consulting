'use client'

import Layout from "@/components/custom-components/Layout";
import Contacts from "@/components/contacts/Contacts";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import AboutUs from "@/components/about-us/AboutUs";
import Workshops from "@/components/workshops/Workshops";
import Insights from "@/components/insights/Insights";
import MotionSection from "@/components/custom-components/motion-section/MotionSection";
import {SECTIONS} from "@/main/constants/BASE_SECTIONS";
import './styles/home.scss';

function HomePage() {

    return (
        <MotionSection transition={1} key={"home"} className="home">
            <Layout>

                <Hero id={SECTIONS.hero}/>
                <Services id={SECTIONS.services}/>
                <AboutUs id={SECTIONS.aboutUs}/>
                <Workshops id={SECTIONS.workshops}/>
                <Insights id={SECTIONS.insights}/>
                <Contacts id={SECTIONS.contacts}/>

            </Layout>
        </MotionSection>
    )
}

export default HomePage