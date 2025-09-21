'use client'

import React, { createContext, useContext, useEffect, useState } from "react";
import animationData from "../../main/lottie/orientation/rotate-to-portrait.json";
import Lottie from "lottie-react";

const styles = {
    landscapeContainer: {
        display: "flex",
        position: "fixed",
        zIndex: 1000,
        background: "black",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    lottie: {
        width: 200,
        height: 200,
    },
};

const ScreenOrientationContext = createContext(null);

export const ScreenOrientationProvider = ({ children }) => {
    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {
        const checkOrientation = () => {
            const isLandscapeNow = window.matchMedia("(max-width: 958px) and (orientation: landscape)").matches;
            setIsLandscape(isLandscapeNow);
            document.body.style.overflow = isLandscapeNow ? "hidden" : "";
        };

        checkOrientation();
        window.addEventListener("resize", checkOrientation);
        return () => window.removeEventListener("resize", checkOrientation);
    }, []);

    return (
        <ScreenOrientationContext.Provider value={{ isLandscape }}>
            {isLandscape && (
                <div style={styles.landscapeContainer}>
                    <Lottie animationData={animationData} loop autoPlay style={styles.lottie} />
                </div>
            )}
            {children}
        </ScreenOrientationContext.Provider>
    );
};

export const useScreenOrientation = () => useContext(ScreenOrientationContext);
