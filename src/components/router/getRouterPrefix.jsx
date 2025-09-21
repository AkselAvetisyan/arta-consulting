import {useLocale} from "next-intl";

export function getRouterPrefix() {
    const locale = useLocale();
    return locale === 'am' ? '' : `/${locale}`;
}