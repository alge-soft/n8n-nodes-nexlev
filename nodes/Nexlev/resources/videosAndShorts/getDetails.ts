import type { INodeProperties } from 'n8n-workflow';

const showOnlyForVideosAndShortsGetDetails = {
	operation: ['getDetails'],
	resource: ['videosAndShorts'],
};

export const videoDetailsGetDetailsDescription: INodeProperties[] = [
	{
		displayName: 'Video ID',
		name: 'videoId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForVideosAndShortsGetDetails,
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
