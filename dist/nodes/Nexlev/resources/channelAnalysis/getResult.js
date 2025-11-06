"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelAnalysisGetResultDescription = void 0;
const showOnlyForChannelAnalysisGetResult = {
    operation: ['getResult'],
    resource: ['channelAnalysis'],
};
exports.channelAnalysisGetResultDescription = [
    {
        displayName: 'Job ID',
        name: 'jobId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForChannelAnalysisGetResult,
        },
        description: 'The job ID to get status and results for',
        routing: {
            send: {
                type: 'query',
                property: 'job_id',
            },
        },
    },
];
//# sourceMappingURL=getResult.js.map