'use client'

import Layout from "@/components/custom-components/Layout";
import Contacts from "@/components/contacts/Contacts";
import './styles/home.scss';
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import AboutUs from "@/components/about-us/AboutUs";
import Workshops from "@/components/workshops/Workshops";
import Insights from "@/components/insights/Insights";

function HomePage() {

    return (
            <div className={"home"}>

                <Layout>

                    <Hero/>
                    <Services/>
                    <AboutUs/>
                    <Workshops/>
                    <Insights/>
                    <Contacts/>

                </Layout>

            </div>
    )
}

export default HomePage