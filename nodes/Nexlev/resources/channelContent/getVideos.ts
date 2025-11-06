import type { INodeProperties } from 'n8n-workflow';

const showOnlyForChannelContentGetVideos = {
	operation: ['getVideos'],
	resource: ['channelContent'],
};

export const channelContentGetVideosDescription: INodeProperties[] = [
	{
		displayName: 'Channel ID',
		name: 'channelId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForChannelContentGetVideos,
		},
		description: 'The YouTube channel ID to get videos for',
		routing: {
			send: {
				type: 'query',
				property: 'id',
			},
		},
	},
	{
		displayName: 'Sort By',
		name: 'sortBy',
		type: 'options',
		options: [
			{
				name: 'Popular',
				value: 'popular',
			},
		],
		default: 'popular',
		required: true,
		displayOptions: {
			show: showOnlyForChannelContentGetVideos,
		},
		description: 'Sort videos by popularity',
		routing: {
			send: {
				type: 'query',
				property: 'sort_by',
			},
		},
	},
	{
		displayName: 'Continuation Token',
		name: 'continuationToken',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		displayOptions: {
			show: showOnlyForChannelContentGetVideos,
		},
		description: 'Token for pagination (use continuation value from previous response)',
		routing: {
			send: {
				type: 'query',
				property: 'token',
			},
		},
	},
];
