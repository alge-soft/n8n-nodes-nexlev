"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoDetailsGetBulkTranscriptDescription = void 0;
const showOnlyForVideosAndShortsGetBulkTranscript = {
    operation: ['getBulkTranscript'],
    resource: ['videosAndShorts'],
};
exports.videoDetailsGetBulkTranscriptDescription = [
    {
        displayName: 'Video IDs',
        name: 'videoIds',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForVideosAndShortsGetBulkTranscript,
        },
        description: 'Comma-separated list of YouTube video IDs to get transcripts for (e.g., "_AbFXuGDRTs, dQw4w9WgXcQ, budTmdQfXYU")',
        routing: {
            send: {
                type: 'body',
                property: 'videoIds',
                value: '={{ $value.split(",").map(id => id.trim()) }}',
            },
        },
    },
];
//# sourceMappingURL=getBulkTranscript.js.map