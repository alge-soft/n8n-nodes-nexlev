import type { INodeProperties } from 'n8n-workflow';
import { channelContentGetVideosDescription } from './getVideos';
import { channelContentGetShortsDescription } from './getShorts';
import { channelContentGetAboutDescription } from './getAbout';

const showOnlyForChannelContent = {
	resource: ['channelContent'],
};

export const channelContentDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForChannelContent,
		},
		options: [
			{
				name: 'Get About',
				value: 'getAbout',
				action: 'Get channel about',
				description: 'Get about information for a YouTube channel',
				routing: {
					request: {
						method: 'GET',
						url: '/external/channels/about',
					},
				},
			},
			{
				name: 'Get Videos',
				value: 'getVideos',
				action: 'Get channel videos',
				description: 'Get videos from a YouTube channel',
				routing: {
					request: {
						method: 'GET',
						url: '/external/channels/videos',
					},
				},
			},
			{
				name: 'Get Shorts',
				value: 'getShorts',
				action: 'Get channel shorts',
				description: 'Get short videos from a YouTube channel',
				routing: {
					request: {
						method: 'GET',
						url: '/external/channels/shorts',
					},
				},
			},
		],
		default: 'getVideos',
	},
	...channelContentGetAboutDescription,
	...channelContentGetVideosDescription,
	...channelContentGetShortsDescription,
];
