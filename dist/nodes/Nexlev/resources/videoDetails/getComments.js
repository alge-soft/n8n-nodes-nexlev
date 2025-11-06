"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoDetailsGetCommentsDescription = void 0;
const showOnlyForVideoDetailsGetComments = {
    operation: ['getComments'],
    resource: ['videoDetails'],
};
exports.videoDetailsGetCommentsDescription = [
    {
        displayName: 'Video ID',
        name: 'videoId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForVideoDetailsGetComments,
        },
        description: 'The YouTube video ID to get comments for',
        routing: {
            send: {
                type: 'query',
                property: 'videoId',
            },
        },
    },
];
//# sourceMappingURL=getComments.js.map