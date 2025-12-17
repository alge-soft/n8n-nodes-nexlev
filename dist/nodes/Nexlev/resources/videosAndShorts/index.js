"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoDetailsDescription = void 0;
const getDetails_1 = require("./getDetails");
const getShortsDetails_1 = require("./getShortsDetails");
const getComments_1 = require("./getComments");
const getTranscript_1 = require("./getTranscript");
const getBulkTranscript_1 = require("./getBulkTranscript");
const getSubtitle_1 = require("./getSubtitle");
const getBulkSubtitle_1 = require("./getBulkSubtitle");
const getRPM_1 = require("./getRPM");
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
                name: 'Get Bulk Subtitle',
                value: 'getBulkSubtitle',
                action: 'Get bulk video subtitles',
                description: 'Get subtitles for multiple YouTube videos at once',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/external/videos/bulk-subtitle',
                    },
                },
            },
            {
                name: 'Get Bulk Transcript',
                value: 'getBulkTranscript',
                action: 'Get bulk video transcripts',
                description: 'Get transcripts for multiple YouTube videos at once',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/external/videos/bulk-transcript',
                    },
                },
            },
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
                name: 'Get RPM',
                value: 'getRPM',
                action: 'Get video RPM',
                description: 'Get RPM (Revenue Per Mille) for a YouTube video',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/external/videos/rpm',
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
                name: 'Get Subtitle',
                value: 'getSubtitle',
                action: 'Get video subtitle',
                description: 'Get subtitle for a YouTube video',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/external/videos/subtitle',
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
    ...getRPM_1.videoDetailsGetRPMDescription,
    ...getShortsDetails_1.videoDetailsGetShortsDetailsDescription,
    ...getTranscript_1.videoDetailsGetTranscriptDescription,
    ...getBulkTranscript_1.videoDetailsGetBulkTranscriptDescription,
    ...getSubtitle_1.videoDetailsGetSubtitleDescription,
    ...getBulkSubtitle_1.videoDetailsGetBulkSubtitleDescription,
];
//# sourceMappingURL=index.js.map