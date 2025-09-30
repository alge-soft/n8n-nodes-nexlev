"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nexlev = void 0;
const similarVideos_1 = require("./resources/similarVideos");
class Nexlev {
    constructor() {
        this.description = {
            displayName: 'Nexlev',
            name: 'nexlev',
            icon: { light: 'file:nexlev.svg', dark: 'file:nexlev.dark.svg' },
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with the Nexlev API',
            defaults: {
                name: 'Nexlev',
            },
            usableAsTool: true,
            inputs: ['main'],
            outputs: ['main'],
            credentials: [{ name: 'nexlevApi', required: true }],
            requestDefaults: {
                baseURL: 'http://localhost:3001/api',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Similar Videos',
                            value: 'similarVideos',
                        },
                    ],
                    default: 'similarVideos',
                },
                ...similarVideos_1.similarVideosDescription,
            ],
        };
    }
}
exports.Nexlev = Nexlev;
//# sourceMappingURL=Nexlev.node.js.map