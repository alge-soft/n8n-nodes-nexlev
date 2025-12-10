"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NexlevApi = void 0;
const config_1 = require("../nodes/Nexlev/config");
class NexlevApi {
    constructor() {
        this.name = 'nexlevApi';
        this.displayName = 'Nexlev API';
        this.icon = 'file:../nodes/Nexlev/nexlev.svg';
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
                baseURL: config_1.config.baseURL,
                url: '/external/analytics/channel-analytics',
                method: 'POST',
                body: {
                    channelId: 'UCX6OQ3DkcsbYNE6H8uQQuVA',
                },
            },
        };
    }
}
exports.NexlevApi = NexlevApi;
//# sourceMappingURL=NexlevApi.credentials.js.map