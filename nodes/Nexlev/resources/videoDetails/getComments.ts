import type { INodeProperties } from 'n8n-workflow';

const showOnlyForVideoDetailsGetComments = {
	operation: ['getComments'],
	resource: ['videoDetails'],
};

export const videoDetailsGetCommentsDescription: INodeProperties[] = [
	{
		displayName: 'Video ID',
		name: 'videoId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForVideoDetailsGetComments,
		},
		description: 'The YouTube video ID to get comments for',
		routing: {
			send: {
				type: 'query',
				property: 'videoId',
			},
		},
	},
];
