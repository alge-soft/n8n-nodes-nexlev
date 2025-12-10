"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoDetailsGetSubtitleDescription = void 0;
const showOnlyForVideosAndShortsGetSubtitle = {
    operation: ['getSubtitle'],
    resource: ['videosAndShorts'],
};
exports.videoDetailsGetSubtitleDescription = [
    {
        displayName: 'Video ID',
        name: 'videoId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForVideosAndShortsGetSubtitle,
        },
        description: 'The YouTube video ID to get subtitle for',
        routing: {
            send: {
                type: 'query',
                property: 'videoId',
            },
        },
    },
];
//# sourceMappingURL=getSubtitle.js.map