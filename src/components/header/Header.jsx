import {useEffect, useState} from "react";
import HeaderDesktop from "./desktop/HeaderDesktop";
import HeaderMobile from "./mobile/HeaderMobile";
import {useScreenSize} from "@/main/providers/ScreenSizeProvider";
import {SCREEN_SIZES} from "@/main/constants/SCREEN_SIZES";
import {useLoading} from "@/main/providers/LoadingProvider";
import './styles/header.scss';

function Header({ shouldHideOnScroll = true }) {

    const { isSmallerThan, screenWidth } = useScreenSize();

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        function scrollHandler() {
            if (!shouldHideOnScroll) {
                setIsVisible(true);
                return;
            }

            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 30);
            lastScrollY = currentScrollY;
        }

        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    if (!screenWidth) {
        return null;
    }

    return (
        <>
            {isSmallerThan(SCREEN_SIZES.TABLET_L) ? (
                <HeaderMobile isVisible={isVisible}/>
            ) : (
                <HeaderDesktop isVisible={isVisible}/>
            )}
        </>
    )

}

export default Header