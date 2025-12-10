"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.similarVideosGetSimilarDescription = void 0;
const showOnlyForSimilarVideosGet = {
    operation: ['getSimilar'],
    resource: ['similarVideos'],
};
exports.similarVideosGetSimilarDescription = [
    {
        displayName: 'Input Type',
        name: 'inputType',
        type: 'options',
        options: [
            {
                name: 'Video ID',
                value: 'videoId',
            },
            {
                name: 'Video URL',
                value: 'videoURL',
            },
        ],
        default: 'videoId',
        required: true,
        displayOptions: {
            show: showOnlyForSimilarVideosGet,
        },
        description: 'Choose whether to provide a Video ID or Video URL',
    },
    {
        displayName: 'Video ID',
        name: 'videoId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                ...showOnlyForSimilarVideosGet,
                inputType: ['videoId'],
            },
        },
        description: 'The YouTube video ID to find similar videos for',
        routing: {
            send: {
                type: 'body',
                property: 'videoId',
            },
        },
    },
    {
        displayName: 'Video URL',
        name: 'videoURL',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                ...showOnlyForSimilarVideosGet,
                inputType: ['videoURL'],
            },
        },
        placeholder: 'https://www.youtube.com/watch?v=...',
        description: 'The YouTube video URL to find similar videos for',
        routing: {
            send: {
                type: 'body',
                property: 'videoURL',
            },
        },
    },
];
//# sourceMappingURL=getSimilar.js.map