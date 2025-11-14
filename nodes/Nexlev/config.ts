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

export enum Environment {
	DEV = 'dev',
	PROD = 'prod',
	LOCAL = 'local',
}

// Configuration environment - change this to Environment.DEV or Environment.LOCAL for development URLs
export const ENVIRONMENT = Environment.PROD;

const getBaseURL = (env: Environment): string => {
	switch (env) {
		case Environment.PROD:
			return 'https://prod.dashboard.nexlev.io/api';
		case Environment.DEV:
			return 'https://dev.extension.nexlev.io/api';
		case Environment.LOCAL:
		default:
			return 'http://localhost:3001/api';
	}
};

// Configuration is set at build time via build scripts
// Default configuration for published package
export const config: Config = {
	baseURL: getBaseURL(ENVIRONMENT),
};
