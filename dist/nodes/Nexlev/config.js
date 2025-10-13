"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const getConfig = () => {
    const env = process.env.NEXLEV_ENV || process.env.NODE_ENV || 'prod';
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
exports.config = getConfig();
//# sourceMappingURL=config.js.map