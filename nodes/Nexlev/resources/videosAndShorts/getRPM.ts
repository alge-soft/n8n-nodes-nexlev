import type { INodeProperties } from 'n8n-workflow';

const showOnlyForVideosAndShortsGetRPM = {
	operation: ['getRPM'],
	resource: ['videosAndShorts'],
};

export const videoDetailsGetRPMDescription: INodeProperties[] = [
	{
		displayName: 'Video ID',
		name: 'videoId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForVideosAndShortsGetRPM,
		},
		description: 'The YouTube video ID to get RPM for',
		routing: {
			send: {
				type: 'query',
				property: 'videoId',
			},
		},
	},
];
