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
                {/* Logo */}
                <Link href={getRouterPrefix() + BASE_ROUTERS.main} className="logo-wrapper">
                    <div className="logo-box">
                        <span className="logo-text">ARTA</span>
                    </div>
                    <span className="logo-sub">CONSULTING</span>
                </Link>

                {/* Navigation */}
                <nav className="nav">
                    <Link href={getRouterPrefix() + BASE_ROUTERS.services} className="nav-link">
                        {t("menu-services")}
                    </Link>
                    <Link href={getRouterPrefix() + BASE_ROUTERS.aboutUs} className="nav-link">
                        {t("menu-aboutUs")}
                    </Link>
                    <Link href={getRouterPrefix() + BASE_ROUTERS.invitations} className="nav-link">
                        {t("menu-invitations")}
                    </Link>
                    <Link href={getRouterPrefix() + BASE_ROUTERS.contactUs} className="nav-link">
                        {t("menu-contactUs")}
                    </Link>
                </nav>

                {/* CTA */}
                <Link href={getRouterPrefix() + BASE_ROUTERS.contactUs} className="cta">
                    {t("menu-contactUs")}
                </Link>
            </div>
        </header>
    );
}

export default HeaderDesktop;
