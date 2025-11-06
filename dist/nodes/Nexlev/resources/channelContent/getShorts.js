"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelContentGetShortsDescription = void 0;
const showOnlyForChannelContentGetShorts = {
    operation: ['getShorts'],
    resource: ['channelContent'],
};
exports.channelContentGetShortsDescription = [
    {
        displayName: 'Channel ID',
        name: 'channelId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForChannelContentGetShorts,
        },
        description: 'The YouTube channel ID to get shorts for',
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
                name: 'Oldest',
                value: 'oldest',
            },
        ],
        default: 'latest',
        required: true,
        displayOptions: {
            show: showOnlyForChannelContentGetShorts,
        },
        description: 'Sort shorts by upload date',
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
            show: showOnlyForChannelContentGetShorts,
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
//# sourceMappingURL=getShorts.js.map