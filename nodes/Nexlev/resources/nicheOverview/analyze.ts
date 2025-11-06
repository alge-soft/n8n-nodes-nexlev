import type { INodeProperties } from 'n8n-workflow';

const showOnlyForNicheOverviewAnalyze = {
	operation: ['analyze'],
	resource: ['nicheOverview'],
};

export const nicheOverviewAnalyzeDescription: INodeProperties[] = [
	{
		displayName: 'Channel ID',
		name: 'channelId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForNicheOverviewAnalyze,
		},
		description: 'The YouTube channel ID to analyze for niche overview',
		routing: {
			send: {
				type: 'body',
				property: 'channelId',
			},
		},
	},
];
