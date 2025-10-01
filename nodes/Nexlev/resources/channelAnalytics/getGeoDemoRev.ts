import type { INodeProperties } from 'n8n-workflow';

const showOnlyForChannelAnalyticsGeoDemoRev = {
	operation: ['getGeoDemoRev'],
	resource: ['channelAnalytics'],
};

export const channelAnalyticsGeoDemoRevDescription: INodeProperties[] = [
	{
		displayName: 'Channel ID',
		name: 'channelId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForChannelAnalyticsGeoDemoRev,
		},
		description: 'The YouTube channel ID to get geography, demographics, and revenue data for',
		routing: {
			send: {
				type: 'body',
				property: 'channelId',
			},
		},
	},
];
