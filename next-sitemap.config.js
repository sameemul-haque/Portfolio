const isProduction = process.env.NODE_ENV === 'production';
const domain = isProduction ? 'sameemul-haque.vercel.app' : 'localhost:3000';
const protocol = isProduction ? 'https' : 'http';

/**
 * @type {import('next-sitemap').IConfig}
 */
module.exports = {
	// Error pages and blog routes (redirected to sameem.dev) should not be indexed
	exclude: ['/404', '/500', '/error', '/blog', '/blog/*'],
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [{ userAgent: '*', allow: '/', disallow: ['/error'] }],
	},
	siteUrl: `${protocol}://${domain}`,
};
