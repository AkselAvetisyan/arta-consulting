import {useEffect} from "react";
import {useTranslations} from "next-intl";
import {BASE_IMAGES} from "@/main/constants/BASE_IMAGES";
import Link from "next/link";
import {BASE_ROUTERS} from "@/main/constants/BASE_ROUTERS";
import ContactsSection from "@/components/footer/sections/ContactsSection";
import {usePathname} from "next/navigation";
import './style/footer.scss';

function Footer() {

    const pathname = usePathname()
    const t = useTranslations()

    useEffect(() => {
        scrollToTop()
    }, [pathname]);

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return (
        <footer className={"footer"}>

            <div className="container">

                <ContactsSection/>

                <div className={"services"}>
                    <h2 className={"title"} style={{textAlign: "center"}}>{('menu-services')}</h2>

                    <div className={"items"}>

                    </div>
                </div>

                <div className={"services"}>
                    <h2 className={"title"} style={{textAlign: "center"}}>{('menu-organization')}</h2>

                    <div className={"items"}>
                        <Link href={BASE_ROUTERS.aboutUs}
                              className={"subtitle"}
                              style={{cursor: "pointer"}}>
                            {('menu-aboutUs')}
                        </Link>

                        <Link href={BASE_ROUTERS.invitations}
                              className={"subtitle"}
                              style={{cursor: "pointer"}}>
                            {('menu-invitations')}
                        </Link>
                    </div>
                </div>

                <button className="arrow-button" onClick={scrollToTop}>
                    <img src={BASE_IMAGES.icons.arrowIcon.upArrow} className="arrow-icon default" alt="Scroll to top"/>
                    <img src={BASE_IMAGES.icons.arrowIcon.upArrowHover} className="arrow-icon hover"
                         alt="Scroll to top"/>
                </button>

            </div>

            <div className={"copyright"}>
                <p className={"info"}>{("copyright-info")}</p>
            </div>

        </footer>
    )

}

export default Footer