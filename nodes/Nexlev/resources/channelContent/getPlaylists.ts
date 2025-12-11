import type { INodeProperties } from 'n8n-workflow';

const showOnlyForChannelContentGetPlaylists = {
	operation: ['getPlaylists'],
	resource: ['channelContent'],
};

export const channelContentGetPlaylistsDescription: INodeProperties[] = [
	{
		displayName: 'Channel ID',
		name: 'channelId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForChannelContentGetPlaylists,
		},
		description: 'The YouTube channel ID to get playlists for',
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
				name: 'Date Added',
				value: 'date_added',
			},
			{
				name: 'Last Video Added',
				value: 'last_video_added',
			},
		],
		default: 'date_added',
		displayOptions: {
			show: showOnlyForChannelContentGetPlaylists,
		},
		description: 'Sort playlists by date added or last video added',
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
			show: showOnlyForChannelContentGetPlaylists,
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
