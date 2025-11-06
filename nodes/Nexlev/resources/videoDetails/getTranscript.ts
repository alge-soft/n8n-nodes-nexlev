import type { INodeProperties } from 'n8n-workflow';

const showOnlyForVideoDetailsGetTranscript = {
	operation: ['getTranscript'],
	resource: ['videoDetails'],
};

export const videoDetailsGetTranscriptDescription: INodeProperties[] = [
	{
		displayName: 'Video ID',
		name: 'videoId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForVideoDetailsGetTranscript,
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
