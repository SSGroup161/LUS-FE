const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    onDemandEntries: {
        // Make sure entries are not getting purged from the dev server too quickly
        maxInactiveAge: 25 * 1000, // 25 seconds
    },
};

export default nextConfig;
