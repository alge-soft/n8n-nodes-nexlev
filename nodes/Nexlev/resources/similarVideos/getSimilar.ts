import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSimilarVideosGet = {
	operation: ['getSimilar'],
	resource: ['similarVideos'],
};

export const similarVideosGetSimilarDescription: INodeProperties[] = [
	{
		displayName: 'Video ID',
		name: 'videoId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForSimilarVideosGet,
		},
		description: 'The YouTube video ID to find similar videos for',
		routing: {
			send: {
				type: 'body',
				property: 'videoId',
			},
		},
	},
];
