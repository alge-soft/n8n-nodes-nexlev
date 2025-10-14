/**
 * Configuration for Nexlev API endpoints
 *
 * For published npm package: Hardcoded to production API
 * For local development: Set NEXLEV_ENV environment variable
 *
 * Build commands:
 * - npm run build       (uses hardcoded production URL)
 * - npm run build:local (uses http://localhost:3000/api)
 * - npm run build:dev   (uses https://dev.extension.nexlev.io/api)
 * - npm run build:prod  (uses https://prod.dashboard.nexlev.io/api)
 */

export interface Config {
	baseURL: string;
}

const getConfig = (): Config => {
	// For local development, NEXLEV_ENV can override
	const env = process.env.NEXLEV_ENV;

	switch (env) {
		case 'production':
		case 'prod':
			return {
				baseURL: 'https://prod.dashboard.nexlev.io/api',
			};
		case 'development':
		case 'dev':
			return {
				baseURL: 'https://dev.extension.nexlev.io/api',
			};
		case 'local':
			return {
				baseURL: 'http://localhost:3000/api',
			};
		default:
			// Default for published package - uses DEV API for now
			return {
				baseURL: 'https://dev.extension.nexlev.io/api',
			};
	}
};

export const config = getConfig();
