"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.similarThumbnailsDescription = void 0;
const getSimilar_1 = require("./getSimilar");
const showOnlyForSimilarThumbnails = {
    resource: ['similarThumbnails'],
};
exports.similarThumbnailsDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForSimilarThumbnails,
        },
        options: [
            {
                name: 'Search Similar Thumbnails',
                value: 'search',
                action: 'Search similar thumbnails',
                description: 'Find similar thumbnails based on text or image URL',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/external/similar-thumbnails/search',
                    },
                },
            },
        ],
        default: 'search',
    },
    ...getSimilar_1.similarThumbnailsSearchDescription,
];
//# sourceMappingURL=index.js.map