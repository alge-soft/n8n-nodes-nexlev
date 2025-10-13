/**
 * Configuration for Nexlev API endpoints
 *
 * Environment variables:
 * - NEXLEV_ENV: 'local' | 'dev' | 'prod' (preferred)
 * - NODE_ENV: 'development' | 'production' (fallback)
 *
 * Build commands:
 * - npm run build:local (uses http://localhost:3000/api)
 * - npm run build:dev   (uses https://dev.extension.nexlev.io/api)
 * - npm run build:prod  (uses https://prod.dashboard.nexlev.io/api)
 */

export interface Config {
	baseURL: string;
}

const getConfig = (): Config => {
	const env = process.env.NEXLEV_ENV || process.env.NODE_ENV || 'dev';

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
			return {
				baseURL: 'https://prod.extension.nexlev.io/api',
			};
	}
};

export const config = getConfig();
