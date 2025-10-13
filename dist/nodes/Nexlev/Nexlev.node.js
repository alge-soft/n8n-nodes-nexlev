"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nexlev = void 0;
const config_1 = require("./config");
const similarVideos_1 = require("./resources/similarVideos");
const similarThumbnails_1 = require("./resources/similarThumbnails");
const similarChannels_1 = require("./resources/similarChannels");
const channelAnalytics_1 = require("./resources/channelAnalytics");
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
                baseURL: config_1.config.baseURL,
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
                            name: 'Channel Analytic',
                            value: 'channelAnalytics',
                        },
                        {
                            name: 'Similar Video',
                            value: 'similarVideos',
                        },
                        {
                            name: 'Similar Thumbnail',
                            value: 'similarThumbnails',
                        },
                        {
                            name: 'Similar Channel',
                            value: 'similarChannels',
                        },
                    ],
                    default: 'similarVideos',
                },
                ...channelAnalytics_1.channelAnalyticsDescription,
                ...similarVideos_1.similarVideosDescription,
                ...similarThumbnails_1.similarThumbnailsDescription,
                ...similarChannels_1.similarChannelsDescription,
            ],
        };
    }
}
exports.Nexlev = Nexlev;
//# sourceMappingURL=Nexlev.node.js.map