"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelContentGetVideosDescription = void 0;
const showOnlyForChannelContentGetVideos = {
    operation: ['getVideos'],
    resource: ['channelContent'],
};
exports.channelContentGetVideosDescription = [
    {
        displayName: 'Channel ID',
        name: 'channelId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForChannelContentGetVideos,
        },
        description: 'The YouTube channel ID to get videos for',
        routing: {
            send: {
                type: 'query',
                property: 'id',
            },
        },
    },
    {
        displayName: 'Sort By',
        name: 'sortBy',
        type: 'options',
        options: [
            {
                name: 'Latest',
                value: 'latest',
            },
            {
                name: 'Popular',
                value: 'popular',
            },
            {
                name: 'Oldest',
                value: 'oldest',
            },
        ],
        default: 'latest',
        required: true,
        displayOptions: {
            show: showOnlyForChannelContentGetVideos,
        },
        description: 'Sort videos by upload date or popularity',
        routing: {
            send: {
                type: 'query',
                property: 'sort_by',
            },
        },
    },
    {
        displayName: 'Continuation Token',
        name: 'continuationToken',
        type: 'string',
        typeOptions: { password: true },
        default: '',
        displayOptions: {
            show: showOnlyForChannelContentGetVideos,
        },
        description: 'Token for pagination (use continuation value from previous response)',
        routing: {
            send: {
                type: 'query',
                property: 'token',
            },
        },
    },
];
//# sourceMappingURL=getVideos.js.map