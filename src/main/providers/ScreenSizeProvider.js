'use client'

import React, {createContext, useState, useEffect, useContext} from "react";
import {SCREEN_SIZES} from "../constants/SCREEN_SIZES";
import useWindowWidth from "@/main/hooks/useWindowWidth";

const ScreenSizeContext = createContext(null);

export const ScreenSizeProvider = ({children}) => {

    const screenWidth = useWindowWidth();

    const getScreenSize = () => {
        if (screenWidth >= SCREEN_SIZES.DESKTOP_L.value) return SCREEN_SIZES.DESKTOP_L;
        if (screenWidth >= SCREEN_SIZES.DESKTOP_M.value) return SCREEN_SIZES.DESKTOP_M;
        if (screenWidth >= SCREEN_SIZES.TABLET_L.value) return SCREEN_SIZES.TABLET_L;
        if (screenWidth >= SCREEN_SIZES.TABLET_M.value) return SCREEN_SIZES.TABLET_M;
        if (screenWidth >= SCREEN_SIZES.MOBILE_L.value) return SCREEN_SIZES.MOBILE_L;
        if (screenWidth >= SCREEN_SIZES.MOBILE_M.value) return SCREEN_SIZES.MOBILE_M;

        return SCREEN_SIZES.MOBILE_S;
    };

    const [screenSize, setScreenSize] = useState(getScreenSize());

    const isLessThan = (size) => {
        return screenWidth <= size.value;
    };

    const isMoreThan = (size) => {
        return screenWidth > size.value;
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(getScreenSize());
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ScreenSizeContext.Provider value={{
            isSmallerThan: isLessThan,
            isBiggerThan: isMoreThan,
            screenSize: screenSize || null,
            screenWidth: screenWidth
        }}>
            {children}
        </ScreenSizeContext.Provider>
    );
};

export const useScreenSize = () => {
    return useContext(ScreenSizeContext);
};
