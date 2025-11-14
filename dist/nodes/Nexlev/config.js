"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.ENVIRONMENT = exports.Environment = void 0;
var Environment;
(function (Environment) {
    Environment["DEV"] = "dev";
    Environment["PROD"] = "prod";
    Environment["LOCAL"] = "local";
})(Environment || (exports.Environment = Environment = {}));
exports.ENVIRONMENT = Environment.PROD;
const getBaseURL = (env) => {
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
exports.config = {
    baseURL: getBaseURL(exports.ENVIRONMENT),
};
//# sourceMappingURL=config.js.map