"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nicheOverviewDescription = void 0;
const analyze_1 = require("./analyze");
const showOnlyForNicheOverview = {
    resource: ['nicheOverview'],
};
exports.nicheOverviewDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForNicheOverview,
        },
        options: [
            {
                name: 'Analyze',
                value: 'analyze',
                action: 'Analyze channel niche overview',
                description: 'Analyze and get niche overview for a YouTube channel',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/external/niche-overview/analyze',
                    },
                },
            },
        ],
        default: 'analyze',
    },
    ...analyze_1.nicheOverviewAnalyzeDescription,
];
//# sourceMappingURL=index.js.map