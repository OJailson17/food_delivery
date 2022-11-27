/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.jsdelivr.net',
			},
		],
	},
	pageExtensions: ['page.tsx', 'page.ts', 'tsx', 'jsx', 'js'],
};

module.exports = nextConfig;
