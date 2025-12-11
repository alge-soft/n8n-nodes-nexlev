import type { INodeProperties } from 'n8n-workflow';

const showOnlyForVideosAndShortsGetTranscript = {
	operation: ['getTranscript'],
	resource: ['videosAndShorts'],
};

export const videoDetailsGetTranscriptDescription: INodeProperties[] = [
	{
		displayName: 'Video ID',
		name: 'videoId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForVideosAndShortsGetTranscript,
		},
		description: 'The YouTube video ID to get transcript for',
		routing: {
			send: {
				type: 'query',
				property: 'videoId',
			},
		},
	},
];
