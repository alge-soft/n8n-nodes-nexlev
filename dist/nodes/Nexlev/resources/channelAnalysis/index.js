"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelAnalysisDescription = void 0;
const createJob_1 = require("./createJob");
const getResult_1 = require("./getResult");
const showOnlyForChannelAnalysis = {
    resource: ['channelAnalysis'],
};
exports.channelAnalysisDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForChannelAnalysis,
        },
        options: [
            {
                name: 'Create Job',
                value: 'createJob',
                action: 'Create channel analysis job',
                description: 'Create a new channel analysis job',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/external/channels/analysis/job/create',
                    },
                },
            },
            {
                name: 'Get Result',
                value: 'getResult',
                action: 'Get channel analysis result',
                description: 'Get the status and results of a channel analysis job',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/external/channels/analysis/job/status',
                    },
                },
            },
        ],
        default: 'createJob',
    },
    ...createJob_1.channelAnalysisCreateJobDescription,
    ...getResult_1.channelAnalysisGetResultDescription,
];
//# sourceMappingURL=index.js.map