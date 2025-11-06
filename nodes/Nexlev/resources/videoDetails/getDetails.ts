import type { INodeProperties } from 'n8n-workflow';

const showOnlyForVideoDetailsGetDetails = {
	operation: ['getDetails'],
	resource: ['videoDetails'],
};

export const videoDetailsGetDetailsDescription: INodeProperties[] = [
	{
		displayName: 'Video ID',
		name: 'videoId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForVideoDetailsGetDetails,
		},
		description: 'The YouTube video ID to get details for',
		routing: {
			send: {
				type: 'query',
				property: 'videoId',
			},
		},
	},
];
