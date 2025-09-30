"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.similarVideosGetSimilarDescription = void 0;
const showOnlyForSimilarVideosGet = {
    operation: ['getSimilar'],
    resource: ['similarVideos'],
};
exports.similarVideosGetSimilarDescription = [
    {
        displayName: 'Video ID',
        name: 'videoId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForSimilarVideosGet,
        },
        description: 'The YouTube video ID to find similar videos for',
        routing: {
            send: {
                type: 'body',
                property: 'videoId',
            },
        },
    },
];
//# sourceMappingURL=getSimilar.js.map