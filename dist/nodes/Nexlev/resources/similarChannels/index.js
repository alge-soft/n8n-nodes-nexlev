"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.similarChannelsDescription = void 0;
const search_1 = require("./search");
const showOnlyForSimilarChannels = {
    resource: ['similarChannels'],
};
exports.similarChannelsDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForSimilarChannels,
        },
        options: [
            {
                name: 'Search Similar Channels',
                value: 'search',
                action: 'Search similar channels',
                description: 'Find similar channels based on a YouTube channel',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/external/similar-channels/search',
                    },
                },
            },
        ],
        default: 'search',
    },
    ...search_1.similarChannelsSearchDescription,
];
//# sourceMappingURL=index.js.map