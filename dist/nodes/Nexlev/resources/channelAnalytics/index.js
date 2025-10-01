"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelAnalyticsDescription = void 0;
const getAnalytics_1 = require("./getAnalytics");
const getGeoDemoRev_1 = require("./getGeoDemoRev");
const getShortVsLongViews_1 = require("./getShortVsLongViews");
const showOnlyForChannelAnalytics = {
    resource: ['channelAnalytics'],
};
exports.channelAnalyticsDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForChannelAnalytics,
        },
        options: [
            {
                name: 'Get Analytics',
                value: 'getAnalytics',
                action: 'Get channel analytics',
                description: 'Get analytics data for a YouTube channel',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/external/analytics/channel-analytics',
                    },
                },
            },
            {
                name: 'Get Geography Demographics Revenue',
                value: 'getGeoDemoRev',
                action: 'Get geography demographics revenue',
                description: 'Get geography, demographics, and revenue data for a YouTube channel',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/external/analytics/channel-analytics/geography-revenue',
                    },
                },
            },
            {
                name: 'Get Short vs Long Views',
                value: 'getShortVsLongViews',
                action: 'Get short vs long views',
                description: 'Get short and long video views for a YouTube channel',
                routing: {
                    request: {
                        method: 'GET',
                    },
                },
            },
        ],
        default: 'getAnalytics',
    },
    ...getAnalytics_1.channelAnalyticsGetDescription,
    ...getGeoDemoRev_1.channelAnalyticsGeoDemoRevDescription,
    ...getShortVsLongViews_1.channelAnalyticsShortVsLongViewsDescription,
];
//# sourceMappingURL=index.js.map