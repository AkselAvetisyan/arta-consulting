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
    const pathname = usePathname();
    const path = pathname === getRouterPrefix() + BASE_ROUTERS.main ? "Home Screen" : pathname

    return (
        <>
            <header className={`header-desktop ${isVisible ? 'header-visible' : 'header-hidden'}`}>

                <div className={"container"}>

                    <Link href={getRouterPrefix() + BASE_ROUTERS.main}>
                        <img className={"logo"} src={BASE_IMAGES.icons.logo} alt="Hyoor logo"/>
                    </Link>

                    <div className={"services"}>
                        <Link href={getRouterPrefix() + BASE_ROUTERS.aboutUs}
                              className={"service"}>
                            {t("menu-aboutUs")}
                        </Link>

                        <Link href={getRouterPrefix() + BASE_ROUTERS.services}
                              className={"service"}>
                            {t("menu-services")}
                        </Link>

                        <Link href={getRouterPrefix() + BASE_ROUTERS.invitations}
                              className={"service"}>
                            {t("menu-invitations")}
                        </Link>

                        <Link href={getRouterPrefix() + BASE_ROUTERS.contactUs}
                              className={"service contact-us"}>
                            {t("menu-contactUs")}
                        </Link>
                    </div>

                </div>

            </header>
        </>
    );
}

export default HeaderDesktop;
