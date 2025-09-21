import {v4 as uuid} from "uuid";
import {useTranslation} from "react-i18next";
import {useLocation, useNavigate} from "react-router-dom";
import {trackFooterLanguageClicked} from "../../../main/utility/analytics";
import {getRouterPrefix} from "../../router/getRouterPrefix";
import {BASE_ROUTERS} from "../../../main/constants/BASE_ROUTERS";

function FooterLanguagesSection() {

    const { t, i18n } = useTranslation()
    const languages = ["am", "en", "ru"]
    const location = useLocation()
    const navigate = useNavigate()

    function getLanguageButton(text) {
        return (
            <button onClick={() => changeLanguage(text)}
                    key={uuid()}
                    className={`footer-language ${i18n.language === text && "footer-current-language"}`}>
                {(text)}
            </button>
        )
    }

    function changeLanguage(language) {
        if (i18n.language !== language) {
            i18n.changeLanguage(language).then(() => {
                const pathWithoutLang = location.pathname.replace(/^\/(en|ru|am)/, "");
                const newPath = language === "am" ? `${pathWithoutLang}` : `/${language}${pathWithoutLang}`;
                navigate(newPath);
            });

            trackFooterLanguageClicked(
                location.pathname === getRouterPrefix() + BASE_ROUTERS.main ? "Home Screen" : location.pathname,
                language
            )
        }
    }

    return (
        <div>
            <h2 className={"footer-section-title"}>{("select-language")}</h2>
            <div className={"footer-languages"}>{languages.map(language => {
                return getLanguageButton(language)
            })}</div>
        </div>
    )
}

export default FooterLanguagesSection