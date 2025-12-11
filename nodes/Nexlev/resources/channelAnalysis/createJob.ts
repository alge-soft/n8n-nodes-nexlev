import type { INodeProperties } from 'n8n-workflow';

const showOnlyForChannelAnalysisCreateJob = {
	operation: ['createJob'],
	resource: ['channelAnalysis'],
};

export const channelAnalysisCreateJobDescription: INodeProperties[] = [
	{
		displayName: 'Channel ID',
		name: 'channelId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForChannelAnalysisCreateJob,
		},
		description: 'The YouTube channel ID to create analysis job for',
		routing: {
			send: {
				type: 'query',
				property: 'channel_id',
			},
		},
	},
];
