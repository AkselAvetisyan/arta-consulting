'use client'

import {ScreenSizeProvider} from "@/main/providers/ScreenSizeProvider";
import {ScreenOrientationProvider} from "@/main/providers/ScreenOrientationProvider";
import '../styles/index.scss';
import '../styles/main.scss';

export default function RootPage({pages}) {

    return (
        <ScreenSizeProvider>
            <ScreenOrientationProvider>
                {pages}
            </ScreenOrientationProvider>
        </ScreenSizeProvider>
    );
}