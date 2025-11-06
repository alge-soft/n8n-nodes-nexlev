"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelContentGetAboutDescription = void 0;
const showOnlyForChannelContentGetAbout = {
    operation: ['getAbout'],
    resource: ['channelContent'],
};
exports.channelContentGetAboutDescription = [
    {
        displayName: 'Search By',
        name: 'searchBy',
        type: 'options',
        options: [
            {
                name: 'Channel ID',
                value: 'channelId',
            },
            {
                name: 'Username',
                value: 'username',
            },
        ],
        default: 'channelId',
        required: true,
        displayOptions: {
            show: showOnlyForChannelContentGetAbout,
        },
        description: 'Choose whether to search by channel ID or username',
    },
    {
        displayName: 'Channel ID',
        name: 'channelId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                ...showOnlyForChannelContentGetAbout,
                searchBy: ['channelId'],
            },
        },
        description: 'The YouTube channel ID to get about information for',
        routing: {
            send: {
                type: 'query',
                property: 'id',
            },
        },
    },
    {
        displayName: 'Username',
        name: 'username',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                ...showOnlyForChannelContentGetAbout,
                searchBy: ['username'],
            },
        },
        description: 'The YouTube username to get about information for',
        routing: {
            send: {
                type: 'query',
                property: 'forUsername',
            },
        },
    },
];
//# sourceMappingURL=getAbout.js.map