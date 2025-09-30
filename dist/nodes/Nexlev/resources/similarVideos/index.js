"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.similarVideosDescription = void 0;
const getSimilar_1 = require("./getSimilar");
const showOnlyForSimilarVideos = {
    resource: ['similarVideos'],
};
exports.similarVideosDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForSimilarVideos,
        },
        options: [
            {
                name: 'Get Similar Videos',
                value: 'getSimilar',
                action: 'Get similar videos',
                description: 'Find similar videos based on a YouTube video',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/external/similar-videos/videos',
                    },
                },
            },
        ],
        default: 'getSimilar',
    },
    ...getSimilar_1.similarVideosGetSimilarDescription,
];
//# sourceMappingURL=index.js.map