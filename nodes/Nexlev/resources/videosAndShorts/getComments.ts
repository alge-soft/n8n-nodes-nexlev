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
	{
		displayName: 'Continuation Token',
		name: 'continuationToken',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		displayOptions: {
			show: showOnlyForVideosAndShortsGetComments,
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
