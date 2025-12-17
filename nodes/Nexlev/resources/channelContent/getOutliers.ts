import type { INodeProperties } from 'n8n-workflow';

const showOnlyForChannelContentGetOutliers = {
	operation: ['getOutliers'],
	resource: ['channelContent'],
};

export const channelContentGetOutliersDescription: INodeProperties[] = [
	{
		displayName: 'Channel ID',
		name: 'channelId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForChannelContentGetOutliers,
		},
		description: 'The YouTube channel ID to get outliers for',
		routing: {
			send: {
				type: 'query',
				property: 'id',
			},
		},
	},
	{
		displayName: 'Maximum Videos',
		name: 'maxVideos',
		type: 'number',
		default: 100,
		displayOptions: {
			show: showOnlyForChannelContentGetOutliers,
		},
		description: 'Maximum number of videos to analyze (30-500, default 100)',
		typeOptions: {
			minValue: 30,
			maxValue: 500,
		},
		routing: {
			send: {
				type: 'query',
				property: 'maxVideos',
			},
		},
	},
	{
		displayName: 'Minimum Outlier Threshold',
		name: 'minOutlierThreshold',
		type: 'number',
		default: 2.0,
		displayOptions: {
			show: showOnlyForChannelContentGetOutliers,
		},
		description: 'Minimum outlier threshold multiplier (minimum 1.1, default 2.0)',
		typeOptions: {
			minValue: 1.1,
		},
		routing: {
			send: {
				type: 'query',
				property: 'minOutlierThreshold',
			},
		},
	},
];
