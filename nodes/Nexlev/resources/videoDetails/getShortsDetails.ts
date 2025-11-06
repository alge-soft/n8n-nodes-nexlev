import type { INodeProperties } from 'n8n-workflow';

const showOnlyForVideoDetailsGetShortsDetails = {
	operation: ['getShortsDetails'],
	resource: ['videoDetails'],
};

export const videoDetailsGetShortsDetailsDescription: INodeProperties[] = [
	{
		displayName: 'Video ID',
		name: 'videoId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForVideoDetailsGetShortsDetails,
		},
		description: 'The YouTube shorts video ID to get details for',
		routing: {
			send: {
				type: 'query',
				property: 'videoId',
			},
		},
	},
];
