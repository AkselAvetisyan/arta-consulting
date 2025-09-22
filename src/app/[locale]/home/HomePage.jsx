'use client'

import Layout from "@/components/custom-components/Layout";
import Contacts from "@/components/contacts/Contacts";
import './styles/home.scss';

function HomePage() {

    return (
            <div className={"home"}>

                <Layout>

                    <Contacts/>

                </Layout>

            </div>
    )
}

export default HomePage