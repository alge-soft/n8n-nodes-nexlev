"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoDetailsGetTranscriptDescription = void 0;
const showOnlyForVideoDetailsGetTranscript = {
    operation: ['getTranscript'],
    resource: ['videoDetails'],
};
exports.videoDetailsGetTranscriptDescription = [
    {
        displayName: 'Video ID',
        name: 'videoId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForVideoDetailsGetTranscript,
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