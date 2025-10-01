"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelAnalyticsGeoDemoRevDescription = void 0;
const showOnlyForChannelAnalyticsGeoDemoRev = {
    operation: ['getGeoDemoRev'],
    resource: ['channelAnalytics'],
};
exports.channelAnalyticsGeoDemoRevDescription = [
    {
        displayName: 'Channel ID',
        name: 'channelId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForChannelAnalyticsGeoDemoRev,
        },
        description: 'The YouTube channel ID to get geography, demographics, and revenue data for',
        routing: {
            send: {
                type: 'body',
                property: 'channelId',
            },
        },
    },
];
//# sourceMappingURL=getGeoDemoRev.js.map