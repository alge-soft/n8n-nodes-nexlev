"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoDetailsGetShortsDetailsDescription = void 0;
const showOnlyForVideoDetailsGetShortsDetails = {
    operation: ['getShortsDetails'],
    resource: ['videoDetails'],
};
exports.videoDetailsGetShortsDetailsDescription = [
    {
        displayName: 'Video ID',
        name: 'videoId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForVideoDetailsGetShortsDetails,
        },
        description: 'The YouTube shorts video ID to get details for',
        routing: {
            send: {
                type: 'query',
                property: 'videoId',
            },
        },
    },
];
//# sourceMappingURL=getShortsDetails.js.map