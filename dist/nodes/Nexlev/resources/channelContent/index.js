"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelContentDescription = void 0;
const getVideos_1 = require("./getVideos");
const getShorts_1 = require("./getShorts");
const getAbout_1 = require("./getAbout");
const showOnlyForChannelContent = {
    resource: ['channelContent'],
};
exports.channelContentDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForChannelContent,
        },
        options: [
            {
                name: 'Get About',
                value: 'getAbout',
                action: 'Get channel about',
                description: 'Get about information for a YouTube channel',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/external/channels/about',
                    },
                },
            },
            {
                name: 'Get Videos',
                value: 'getVideos',
                action: 'Get channel videos',
                description: 'Get videos from a YouTube channel',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/external/channels/videos',
                    },
                },
            },
            {
                name: 'Get Shorts',
                value: 'getShorts',
                action: 'Get channel shorts',
                description: 'Get short videos from a YouTube channel',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/external/channels/shorts',
                    },
                },
            },
        ],
        default: 'getVideos',
    },
    ...getAbout_1.channelContentGetAboutDescription,
    ...getVideos_1.channelContentGetVideosDescription,
    ...getShorts_1.channelContentGetShortsDescription,
];
//# sourceMappingURL=index.js.map