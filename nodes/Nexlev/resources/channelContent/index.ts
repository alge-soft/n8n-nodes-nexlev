import type { INodeProperties } from 'n8n-workflow';
import { channelContentGetVideosDescription } from './getVideos';
import { channelContentGetShortsDescription } from './getShorts';
import { channelContentGetAboutDescription } from './getAbout';
import { channelContentGetPlaylistsDescription } from './getPlaylists';
import { channelContentGetOutliersDescription } from './getOutliers';

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
				name: 'Get Outliers',
				value: 'getOutliers',
				action: 'Get channel outliers',
				description: 'Get outlier videos from a YouTube channel',
				routing: {
					request: {
						method: 'GET',
						url: '/outliers',
					},
				},
			},
			{
				name: 'Get Playlists',
				value: 'getPlaylists',
				action: 'Get channel playlists',
				description: 'Get playlists from a YouTube channel',
				routing: {
					request: {
						method: 'GET',
						url: '/external/channels/playlists',
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
		],
		default: 'getVideos',
	},
	...channelContentGetAboutDescription,
	...channelContentGetOutliersDescription,
	...channelContentGetPlaylistsDescription,
	...channelContentGetVideosDescription,
	...channelContentGetShortsDescription,
];
