"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.similarChannelsSearchDescription = void 0;
const showOnlyForSimilarChannelsSearch = {
    operation: ['search'],
    resource: ['similarChannels'],
};
exports.similarChannelsSearchDescription = [
    {
        displayName: 'Channel ID',
        name: 'channelId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForSimilarChannelsSearch,
        },
        description: 'The YouTube channel ID to find similar channels for',
        routing: {
            send: {
                type: 'body',
                property: 'channelId',
            },
        },
    },
    {
        displayName: 'Channel Type',
        name: 'channelType',
        type: 'options',
        options: [
            {
                name: 'All',
                value: 'all',
            },
            {
                name: 'Short',
                value: 'short',
            },
        ],
        default: 'all',
        required: true,
        displayOptions: {
            show: showOnlyForSimilarChannelsSearch,
        },
        description: 'Type of channel content to search for',
        routing: {
            send: {
                type: 'body',
                property: 'channelType',
            },
        },
    },
    {
        displayName: 'Level',
        name: 'level',
        type: 'number',
        default: 1,
        required: true,
        displayOptions: {
            show: showOnlyForSimilarChannelsSearch,
        },
        description: 'Search depth level (1-3)',
        typeOptions: {
            minValue: 1,
            maxValue: 3,
            numberStepSize: 1,
        },
        routing: {
            send: {
                type: 'body',
                property: 'level',
            },
        },
    },
];
//# sourceMappingURL=search.js.map