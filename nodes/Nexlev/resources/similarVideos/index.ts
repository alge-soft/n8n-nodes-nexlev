import type { INodeProperties } from 'n8n-workflow';
import { similarVideosGetSimilarDescription } from './getSimilar';

const showOnlyForSimilarVideos = {
	resource: ['similarVideos'],
};

export const similarVideosDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSimilarVideos,
		},
		options: [
			{
				name: 'Get Similar Videos',
				value: 'getSimilar',
				action: 'Get similar videos',
				description: 'Find similar videos based on a YouTube video',
				routing: {
					request: {
						method: 'POST',
						url: '/external/similar-videos/videos',
					},
				},
			},
		],
		default: 'getSimilar',
	},
	...similarVideosGetSimilarDescription,
];
