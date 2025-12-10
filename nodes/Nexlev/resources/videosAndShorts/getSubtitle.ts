import type { INodeProperties } from 'n8n-workflow';

const showOnlyForVideosAndShortsGetSubtitle = {
	operation: ['getSubtitle'],
	resource: ['videosAndShorts'],
};

export const videoDetailsGetSubtitleDescription: INodeProperties[] = [
	{
		displayName: 'Video ID',
		name: 'videoId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForVideosAndShortsGetSubtitle,
		},
		description: 'The YouTube video ID to get subtitle for',
		routing: {
			send: {
				type: 'query',
				property: 'videoId',
			},
		},
	},
];

