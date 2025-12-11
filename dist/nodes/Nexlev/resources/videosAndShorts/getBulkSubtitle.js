"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoDetailsGetBulkSubtitleDescription = void 0;
const showOnlyForVideosAndShortsGetBulkSubtitle = {
    operation: ['getBulkSubtitle'],
    resource: ['videosAndShorts'],
};
exports.videoDetailsGetBulkSubtitleDescription = [
    {
        displayName: 'Video IDs',
        name: 'videoIds',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForVideosAndShortsGetBulkSubtitle,
        },
        description: 'Comma-separated list of YouTube video IDs to get subtitles for (e.g., "_AbFXuGDRTs, dQw4w9WgXcQ, budTmdQfXYU")',
        routing: {
            send: {
                type: 'body',
                property: 'videoIds',
                value: '={{ $value.split(",").map(id => id.trim()) }}',
            },
        },
    },
];
//# sourceMappingURL=getBulkSubtitle.js.map