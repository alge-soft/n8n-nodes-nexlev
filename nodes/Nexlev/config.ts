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

// Configuration is set at build time via build scripts
// Default configuration for published package
export const config: Config = {
	baseURL: 'https://dev.extension.nexlev.io/api',
};
