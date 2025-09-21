import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true
    },
    poweredByHeader: false, // As SEO warning
};

const withNextIntl = createNextIntlPlugin('./services/i18n/request.js');

export default withNextIntl(nextConfig);