import React, {useEffect, useState} from "react";
import HeaderContent from "./HeaderContent";
import Sidebar from "./Sidebar";
import {getRouterPrefix} from "../../router/getRouterPrefix";
import {usePathname} from "next/navigation";
import {BASE_ROUTERS} from "@/main/constants/BASE_ROUTERS";
import '../styles/header-mobile.scss';

function HeaderMobile({isVisible}) {

    const safeDocument = typeof document !== 'undefined' ? document : {};
    const { body } = safeDocument;
    const pathname = usePathname()
    const path = pathname === getRouterPrefix() + BASE_ROUTERS.main ? "Home Screen" : pathname

    const [sidebar, setSidebar] = useState(false);

    useEffect(() => {
        body.style.overflow = sidebar ? 'hidden' : 'scroll';
    }, [sidebar]);

    function showSidebar() {
        setSidebar(true)
    }

    function hideSidebar() {
        setSidebar(false)
    }

    return (
        <section className={"header-mobile"}>
            <HeaderContent isVisible={isVisible}
                           isSidebarVisible={sidebar}
                           showSidebar={showSidebar}
                           hideSidebar={hideSidebar}/>

            <Sidebar sidebar={sidebar} hideSidebar={hideSidebar}/>
        </section>
    );
}

export default HeaderMobile