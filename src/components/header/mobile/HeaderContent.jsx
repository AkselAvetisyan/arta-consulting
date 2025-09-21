import React from "react";
import {getRouterPrefix} from "../../router/getRouterPrefix";
import Link from "next/link";
import {BASE_ROUTERS} from "@/main/constants/BASE_ROUTERS";
import {BASE_IMAGES} from "@/main/constants/BASE_IMAGES";

const HeaderContent = ({isVisible, isSidebarVisible, showSidebar, hideSidebar}) => {

    return (
        <div className={`content ${isVisible ? 'header-visible' : 'header-hidden'}`}>
            <Link className="logo-container"
                  href={getRouterPrefix() + BASE_ROUTERS.main}>
                <img className={"logo"} src={BASE_IMAGES.icons.logo} alt="Hyoor logo"/>
            </Link>

            <div className="burger-icon-container" onClick={isSidebarVisible ? hideSidebar : showSidebar}>
                <img
                    className={`burger-icon ${isSidebarVisible ? 'hidden' : 'visible'}`}
                    src={BASE_IMAGES.icons.burger}
                    alt="Menu"
                />
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
