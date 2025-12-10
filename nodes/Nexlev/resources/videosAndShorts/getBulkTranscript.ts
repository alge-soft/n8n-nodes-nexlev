import type { INodeProperties } from 'n8n-workflow';

const showOnlyForVideosAndShortsGetBulkTranscript = {
	operation: ['getBulkTranscript'],
	resource: ['videosAndShorts'],
};

export const videoDetailsGetBulkTranscriptDescription: INodeProperties[] = [
	{
		displayName: 'Video IDs',
		name: 'videoIds',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForVideosAndShortsGetBulkTranscript,
		},
		description: 'Comma-separated list of YouTube video IDs to get transcripts for (e.g., "_AbFXuGDRTs, dQw4w9WgXcQ, budTmdQfXYU")',
		routing: {
			send: {
				type: 'body',
				property: 'videoIds',
				value: '={{ $value.split(",").map(id => id.trim()) }}',
			},
		},
	},
];

