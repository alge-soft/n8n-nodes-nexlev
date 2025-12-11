"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoDetailsGetDetailsDescription = void 0;
const showOnlyForVideosAndShortsGetDetails = {
    operation: ['getDetails'],
    resource: ['videosAndShorts'],
};
exports.videoDetailsGetDetailsDescription = [
    {
        displayName: 'Video ID',
        name: 'videoId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForVideosAndShortsGetDetails,
        },
        description: 'The YouTube video ID to get details for',
        routing: {
            send: {
                type: 'query',
                property: 'videoId',
            },
        },
    },
];
//# sourceMappingURL=getDetails.js.map