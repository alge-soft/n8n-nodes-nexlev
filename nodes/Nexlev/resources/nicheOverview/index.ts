import type { INodeProperties } from 'n8n-workflow';
import { nicheOverviewAnalyzeDescription } from './analyze';

const showOnlyForNicheOverview = {
	resource: ['nicheOverview'],
};

export const nicheOverviewDescription: INodeProperties[] = [
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
	...nicheOverviewAnalyzeDescription,
];
