"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoDetailsGetDetailsDescription = void 0;
const showOnlyForVideoDetailsGetDetails = {
    operation: ['getDetails'],
    resource: ['videoDetails'],
};
exports.videoDetailsGetDetailsDescription = [
    {
        displayName: 'Video ID',
        name: 'videoId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForVideoDetailsGetDetails,
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