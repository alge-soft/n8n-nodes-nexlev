import type { INodeProperties } from 'n8n-workflow';

const showOnlyForChannelAnalyticsGet = {
	operation: ['getAnalytics'],
	resource: ['channelAnalytics'],
};

export const channelAnalyticsGetDescription: INodeProperties[] = [
	{
		displayName: 'Channel ID',
		name: 'channelId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForChannelAnalyticsGet,
		},
		description: 'The YouTube channel ID to get analytics for',
		routing: {
			send: {
				type: 'body',
				property: 'channelId',
			},
		},
	},
];
