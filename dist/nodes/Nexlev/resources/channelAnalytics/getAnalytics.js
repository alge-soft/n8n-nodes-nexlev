"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelAnalyticsGetDescription = void 0;
const showOnlyForChannelAnalyticsGet = {
    operation: ['getAnalytics'],
    resource: ['channelAnalytics'],
};
exports.channelAnalyticsGetDescription = [
    {
        displayName: 'Channel ID',
        name: 'channelId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForChannelAnalyticsGet,
        },
        description: 'The YouTube channel ID to get analytics for',
        routing: {
            send: {
                type: 'body',
                property: 'channelId',
            },
        },
    },
];
//# sourceMappingURL=getAnalytics.js.map