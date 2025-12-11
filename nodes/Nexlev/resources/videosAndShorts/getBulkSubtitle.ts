import type { INodeProperties } from 'n8n-workflow';

const showOnlyForVideosAndShortsGetBulkSubtitle = {
	operation: ['getBulkSubtitle'],
	resource: ['videosAndShorts'],
};

export const videoDetailsGetBulkSubtitleDescription: INodeProperties[] = [
	{
		displayName: 'Video IDs',
		name: 'videoIds',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForVideosAndShortsGetBulkSubtitle,
		},
		description: 'Comma-separated list of YouTube video IDs to get subtitles for (e.g., "_AbFXuGDRTs, dQw4w9WgXcQ, budTmdQfXYU")',
		routing: {
			send: {
				type: 'body',
				property: 'videoIds',
				value: '={{ $value.split(",").map(id => id.trim()) }}',
			},
		},
	},
];

