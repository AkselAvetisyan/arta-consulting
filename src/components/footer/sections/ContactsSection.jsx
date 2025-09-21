import {useTranslations} from "next-intl";
import Link from "next/link";
import {BASE_ROUTERS} from "@/main/constants/BASE_ROUTERS";
import {BASE_IMAGES} from "@/main/constants/BASE_IMAGES";
import {BASE_CONSTANTS, SOCIAL_MEDIA} from "@/main/constants/BASE_CONSTANTS";
import {usePathname} from "next/navigation";
import {getRouterPrefix} from "@/components/router/getRouterPrefix";

function ContactsSection() {

    const t = useTranslations()
    const pathname = usePathname()

    const socialMedia = [
        "facebook",
        "instagram",
        "tiktok",
        "pinterest"
    ];

    return (
        <div className="contacts-section">

            <Link href={getRouterPrefix() + BASE_ROUTERS.main}>
                <img className={"logo"} src={BASE_IMAGES.icons.logo} alt="Hyoor logo"/>
            </Link>


            <div className={"contacts"}>

                <div className={"contact-us"}>

                    <h3 className={"title"}>{('menu-contactUs')}</h3>

                    <a href={`tel:${BASE_CONSTANTS.phoneNumber}`} className={"section"}>
                        <img src={BASE_IMAGES.icons.contact.phone} alt="Phone icon"/>
                        <p className={"subtitle"} style={{cursor: "pointer"}}>{BASE_CONSTANTS.phoneNumber}</p>
                    </a>

                    <a href={`mailto:${BASE_CONSTANTS.email}`} className={"section"}>
                        <img src={BASE_IMAGES.icons.contact.email} alt="Email icon"/>
                        <p className={"subtitle"} style={{cursor: "pointer"}}>{BASE_CONSTANTS.email}</p>
                    </a>

                </div>

                <div className={"follow-us"}>

                    <h3 className={"title"}>{('menu-followUs')}</h3>

                    <div className="social-icons">
                        {SOCIAL_MEDIA.filter(el => socialMedia.includes(el.name))
                            .map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={item.url}
                                    draggable={false}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon-link"
                                >
                                    <img src={item.icon} className="icon default" alt={item.name} />
                                    <img src={item.iconHover} className="icon hover" alt={item.name + '-hover'} />
                                </Link>
                            );
                        })}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ContactsSection