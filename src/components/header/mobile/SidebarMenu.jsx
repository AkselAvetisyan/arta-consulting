import React from "react";
import {SidebarData} from "../models/SidebarData";
import {getRouterPrefix} from "../../router/getRouterPrefix";
import {useTranslations} from "next-intl";
import Link from "next/link";
import {SECTIONS} from "@/main/constants/BASE_SECTIONS";

function SidebarMenu({ hideSidebar = () => {} }) {

    const t = useTranslations()

    function scrollToSection(id) {
        const section = document.getElementById(id);
        section.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className={"menu-items"}>
            {SidebarData.map((item, index) => (
                <button key={index}
                        className={"menu-item"}
                        onClick={() => {
                            hideSidebar()

                            setTimeout(() => {
                                scrollToSection(item.sectionName)
                            }, 400)
                        }}>
                    {t(item.title)}
                </button>
            ))}
        </div>
    );
};

export default SidebarMenu;
