import React from 'react';
import { getRouterPrefix } from "../../router/getRouterPrefix";
import {usePathname} from "next/navigation";
import {useTranslations} from "next-intl";
import {BASE_ROUTERS} from "@/main/constants/BASE_ROUTERS";
import Link from "next/link";
import {BASE_IMAGES} from "@/main/constants/BASE_IMAGES";
import '../styles/header-desktop.scss';

function HeaderDesktop({ isVisible }) {
    const t = useTranslations();

    return (
        <header className={`header-desktop ${isVisible ? "header-visible" : "header-hidden"}`}>
            <div className="header-container">
                <Link href={getRouterPrefix() + BASE_ROUTERS.main} className="logo-container">
                    <div className="logo-icon">
                        <span className="logo-text">ARTA</span>
                    </div>
                    <span className="logo-text">CONSULTING</span>
                </Link>

                <nav className="content">
                    <Link href={getRouterPrefix() + BASE_ROUTERS.services} className="menu-item">
                        {t("menu-services")}
                    </Link>
                    <Link href={getRouterPrefix() + BASE_ROUTERS.aboutUs} className="menu-item">
                        {t("menu-aboutUs")}
                    </Link>
                    <Link href={getRouterPrefix() + BASE_ROUTERS.invitations} className="menu-item">
                        {t("menu-workshops")}
                    </Link>
                    <Link href={getRouterPrefix() + BASE_ROUTERS.contactUs} className="menu-item">
                        {t("menu-insights")}
                    </Link>
                </nav>

                {/* CTA */}
                <Link href={getRouterPrefix() + BASE_ROUTERS.contactUs} className="button">
                    {t("menu-contactUs")}
                </Link>
            </div>
        </header>
    );
}

export default HeaderDesktop;
