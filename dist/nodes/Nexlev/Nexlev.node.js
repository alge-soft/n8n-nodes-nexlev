"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nexlev = void 0;
const config_1 = require("./config");
const similarVideos_1 = require("./resources/similarVideos");
const similarThumbnails_1 = require("./resources/similarThumbnails");
const similarChannels_1 = require("./resources/similarChannels");
const channelAnalytics_1 = require("./resources/channelAnalytics");
const channelAnalysis_1 = require("./resources/channelAnalysis");
const channelContent_1 = require("./resources/channelContent");
const videosAndShorts_1 = require("./resources/videosAndShorts");
const nicheOverview_1 = require("./resources/nicheOverview");
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
                            name: 'Channel Analysis',
                            value: 'channelAnalysis',
                        },
                        {
                            name: 'Channel Analytic',
                            value: 'channelAnalytics',
                        },
                        {
                            name: 'Channel Content',
                            value: 'channelContent',
                        },
                        {
                            name: 'Niche Overview',
                            value: 'nicheOverview',
                        },
                        {
                            name: 'Similar Channel',
                            value: 'similarChannels',
                        },
                        {
                            name: 'Similar Thumbnail',
                            value: 'similarThumbnails',
                        },
                        {
                            name: 'Similar Video',
                            value: 'similarVideos',
                        },
                        {
                            name: 'Videos and Short',
                            value: 'videosAndShorts',
                        },
                    ],
                    default: 'similarVideos',
                },
                ...channelAnalytics_1.channelAnalyticsDescription,
                ...channelAnalysis_1.channelAnalysisDescription,
                ...channelContent_1.channelContentDescription,
                ...nicheOverview_1.nicheOverviewDescription,
                ...similarVideos_1.similarVideosDescription,
                ...similarThumbnails_1.similarThumbnailsDescription,
                ...similarChannels_1.similarChannelsDescription,
                ...videosAndShorts_1.videoDetailsDescription,
            ],
        };
    }
}
exports.Nexlev = Nexlev;
//# sourceMappingURL=Nexlev.node.js.map