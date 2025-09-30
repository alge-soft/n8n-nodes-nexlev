"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NexlevApi = void 0;
class NexlevApi {
    constructor() {
        this.name = 'nexlevApi';
        this.displayName = 'Nexlev API';
        this.documentationUrl = 'https://github.com/org/-nexlev?tab=readme-ov-file#credentials';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                typeOptions: { password: true },
                required: true,
                default: '',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    'x-api-key': '={{$credentials.apiKey}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'http://localhost:3001/api',
                url: '/v1/user',
            },
        };
    }
}
exports.NexlevApi = NexlevApi;
//# sourceMappingURL=NexlevApi.credentials.js.map