"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nicheOverviewAnalyzeDescription = void 0;
const showOnlyForNicheOverviewAnalyze = {
    operation: ['analyze'],
    resource: ['nicheOverview'],
};
exports.nicheOverviewAnalyzeDescription = [
    {
        displayName: 'Channel ID',
        name: 'channelId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForNicheOverviewAnalyze,
        },
        description: 'The YouTube channel ID to analyze for niche overview',
        routing: {
            send: {
                type: 'body',
                property: 'channelId',
            },
        },
    },
];
//# sourceMappingURL=analyze.js.map