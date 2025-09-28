import React from "react";
import {getRouterPrefix} from "../../router/getRouterPrefix";
import Link from "next/link";
import {BASE_ROUTERS} from "@/main/constants/BASE_ROUTERS";
import {BASE_IMAGES} from "@/main/constants/BASE_IMAGES";
import { Menu, X } from "lucide-react";

const HeaderContent = ({isVisible, isSidebarVisible, showSidebar, hideSidebar}) => {

    return (
        <div className={`content ${isVisible ? 'header-visible' : 'header-hidden'}`}>
            <Link href={getRouterPrefix() + BASE_ROUTERS.main} className="logo-container">
                <div className="logo-icon">
                    <span className="logo-text">ARTA</span>
                </div>
                <span className="logo-text">CONSULTING</span>
            </Link>

            <div className="burger-icon-container" onClick={isSidebarVisible ? hideSidebar : showSidebar}>
                <Menu size={24}
                      className={`burger-icon ${isSidebarVisible ? 'hidden' : 'visible'}`}/>

                <img
                    className={`close-icon ${isSidebarVisible ? 'visible' : 'hidden'}`}
                    src={BASE_IMAGES.icons.close}
                    alt="Close"
                />
            </div>
        </div>
    );
};

export default HeaderContent;
