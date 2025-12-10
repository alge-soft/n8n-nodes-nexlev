"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoDetailsGetCommentsDescription = void 0;
const showOnlyForVideosAndShortsGetComments = {
    operation: ['getComments'],
    resource: ['videosAndShorts'],
};
exports.videoDetailsGetCommentsDescription = [
    {
        displayName: 'Video ID',
        name: 'videoId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForVideosAndShortsGetComments,
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