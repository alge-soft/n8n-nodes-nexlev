import type { INodeProperties } from 'n8n-workflow';
import { channelAnalyticsGetDescription } from './getAnalytics';
import { channelAnalyticsGeoDemoRevDescription } from './getGeoDemoRev';
import { channelAnalyticsShortVsLongViewsDescription } from './getShortVsLongViews';

const showOnlyForChannelAnalytics = {
	resource: ['channelAnalytics'],
};

export const channelAnalyticsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForChannelAnalytics,
		},
		options: [
			{
				name: 'Get Analytics',
				value: 'getAnalytics',
				action: 'Get channel analytics',
				description: 'Get analytics data for a YouTube channel',
				routing: {
					request: {
						method: 'POST',
						url: '/external/analytics/channel-analytics',
					},
				},
			},
			{
				name: 'Get Geography Demographics Revenue',
				value: 'getGeoDemoRev',
				action: 'Get geography demographics revenue',
				description: 'Get geography, demographics, and revenue data for a YouTube channel',
				routing: {
					request: {
						method: 'POST',
						url: '/external/analytics/channel-analytics/geography-revenue',
					},
				},
			},
			{
				name: 'Get Short vs Long Views',
				value: 'getShortVsLongViews',
				action: 'Get short vs long views',
				description: 'Get short and long video views for a YouTube channel',
				routing: {
					request: {
						method: 'GET',
					},
				},
			},
		],
		default: 'getAnalytics',
	},
	...channelAnalyticsGetDescription,
	...channelAnalyticsGeoDemoRevDescription,
	...channelAnalyticsShortVsLongViewsDescription,
];
