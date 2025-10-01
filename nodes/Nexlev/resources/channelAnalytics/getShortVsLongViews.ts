import type { INodeProperties } from 'n8n-workflow';

const showOnlyForChannelAnalyticsShortVsLong = {
	operation: ['getShortVsLongViews'],
	resource: ['channelAnalytics'],
};

export const channelAnalyticsShortVsLongViewsDescription: INodeProperties[] = [
	{
		displayName: 'Channel ID',
		name: 'channelId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForChannelAnalyticsShortVsLong,
		},
		description: 'The YouTube channel ID to get short vs long views data for',
		routing: {
			send: {
				type: 'query',
				property: 'channelId',
			},
			request: {
				url: '=/external/analytics/channel-analytics/{{$parameter["channelId"]}}/short-vs-long-views',
			},
		},
	},
];
