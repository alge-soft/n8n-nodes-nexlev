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
    {
        displayName: 'Continuation Token',
        name: 'continuationToken',
        type: 'string',
        typeOptions: { password: true },
        default: '',
        displayOptions: {
            show: showOnlyForVideosAndShortsGetComments,
        },
        description: 'Token for pagination (use continuation value from previous response)',
        routing: {
            send: {
                type: 'query',
                property: 'token',
            },
        },
    },
];
//# sourceMappingURL=getComments.js.map