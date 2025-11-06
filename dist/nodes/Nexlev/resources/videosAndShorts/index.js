"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoDetailsDescription = void 0;
const getDetails_1 = require("./getDetails");
const getShortsDetails_1 = require("./getShortsDetails");
const getComments_1 = require("./getComments");
const getTranscript_1 = require("./getTranscript");
const showOnlyForVideosAndShorts = {
    resource: ['videosAndShorts'],
};
exports.videoDetailsDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForVideosAndShorts,
        },
        options: [
            {
                name: 'Get Comments',
                value: 'getComments',
                action: 'Get video comments',
                description: 'Get comments for a YouTube video',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/external/videos/comments',
                    },
                },
            },
            {
                name: 'Get Details',
                value: 'getDetails',
                action: 'Get video details',
                description: 'Get detailed information for a YouTube video',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/external/videos/details',
                    },
                },
            },
            {
                name: 'Get Shorts Details',
                value: 'getShortsDetails',
                action: 'Get shorts details',
                description: 'Get detailed information for a YouTube shorts video',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/external/shorts/details',
                    },
                },
            },
            {
                name: 'Get Transcript',
                value: 'getTranscript',
                action: 'Get video transcript',
                description: 'Get transcript for a YouTube video',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/external/videos/transcript',
                    },
                },
            },
        ],
        default: 'getDetails',
    },
    ...getComments_1.videoDetailsGetCommentsDescription,
    ...getDetails_1.videoDetailsGetDetailsDescription,
    ...getShortsDetails_1.videoDetailsGetShortsDetailsDescription,
    ...getTranscript_1.videoDetailsGetTranscriptDescription,
];
//# sourceMappingURL=index.js.map