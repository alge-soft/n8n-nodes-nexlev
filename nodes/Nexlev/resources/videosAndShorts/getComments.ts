import type { INodeProperties } from 'n8n-workflow';

const showOnlyForVideosAndShortsGetComments = {
	operation: ['getComments'],
	resource: ['videosAndShorts'],
};

export const videoDetailsGetCommentsDescription: INodeProperties[] = [
	{
		displayName: 'Video ID',
		name: 'videoId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForVideosAndShortsGetComments,
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
