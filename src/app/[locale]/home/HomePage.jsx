'use client'

import Layout from "@/components/custom-components/Layout";
import Contacts from "@/components/contacts/Contacts";
import './styles/home.scss';
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";

function HomePage() {

    return (
            <div className={"home"}>

                <Layout>

                    <Hero/>
                    <Services/>
                    <Contacts/>

                </Layout>

            </div>
    )
}

export default HomePage