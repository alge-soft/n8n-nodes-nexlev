"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelAnalysisCreateJobDescription = void 0;
const showOnlyForChannelAnalysisCreateJob = {
    operation: ['createJob'],
    resource: ['channelAnalysis'],
};
exports.channelAnalysisCreateJobDescription = [
    {
        displayName: 'Channel ID',
        name: 'channelId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForChannelAnalysisCreateJob,
        },
        description: 'The YouTube channel ID to create analysis job for',
        routing: {
            send: {
                type: 'query',
                property: 'channel_id',
            },
        },
    },
];
//# sourceMappingURL=createJob.js.map