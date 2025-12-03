import React from 'react';
import { getRouterPrefix } from "../../router/getRouterPrefix";
import {useTranslations} from "next-intl";
import {BASE_ROUTERS} from "@/main/constants/BASE_ROUTERS";
import Link from "next/link";
import {SECTIONS} from "@/main/constants/BASE_SECTIONS";
import '../styles/header-desktop.scss';
import {BASE_IMAGES} from "@/main/constants/BASE_IMAGES";

function HeaderDesktop({ isVisible }) {

    const t = useTranslations();

    function scrollToSection(id) {
        const section = document.getElementById(id);
        section.scrollIntoView({behavior: "smooth"});
    }

    return (
        <header className={`header-desktop ${isVisible ? "header-visible" : "header-hidden"}`}>
            <div className="header-container">
                <Link href={getRouterPrefix() + BASE_ROUTERS.main} className="logo-container">
                    <img src={BASE_IMAGES.icons.logo} className={"icon"}/>
                </Link>

                <nav className="content">
                    <button className="menu-item" onClick={() => { scrollToSection(SECTIONS.services) }}>
                        {t("menu-services")}
                    </button>
                    <button className="menu-item" onClick={() => { scrollToSection(SECTIONS.aboutUs) }}>
                        {t("menu-aboutUs")}
                    </button>
                    <button className="menu-item" onClick={() => { scrollToSection(SECTIONS.workshops) }}>
                        {t("menu-workshops")}
                    </button>
                    <button className="menu-item" onClick={() => { scrollToSection(SECTIONS.insights) }}>
                        {t("menu-insights")}
                    </button>
                </nav>

                <button className="button" onClick={() => { scrollToSection(SECTIONS.contacts) }}>
                    {t("menu-contactUs")}
                </button>
            </div>
        </header>
    );
}

export default HeaderDesktop;
