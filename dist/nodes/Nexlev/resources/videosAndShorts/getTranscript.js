"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoDetailsGetTranscriptDescription = void 0;
const showOnlyForVideosAndShortsGetTranscript = {
    operation: ['getTranscript'],
    resource: ['videosAndShorts'],
};
exports.videoDetailsGetTranscriptDescription = [
    {
        displayName: 'Video ID',
        name: 'videoId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForVideosAndShortsGetTranscript,
        },
        description: 'The YouTube video ID to get transcript for',
        routing: {
            send: {
                type: 'query',
                property: 'videoId',
            },
        },
    },
];
//# sourceMappingURL=getTranscript.js.map