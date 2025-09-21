import React from "react";
import {SidebarData} from "../models/SidebarData";
import {getRouterPrefix} from "../../router/getRouterPrefix";
import {useTranslations} from "next-intl";
import Link from "next/link";

function SidebarMenu() {

    const t = useTranslations()

    return (
        <div className={"menu-items"}>
            {SidebarData.map((item, index) => (
                <Link key={index}
                      href={`${getRouterPrefix()}${item.urlName}`}
                      className={"menu-item"}>
                    {t(item.title)}
                </Link>
            ))}
        </div>
    );
};

export default SidebarMenu;
