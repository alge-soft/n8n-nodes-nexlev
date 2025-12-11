import type { INodeProperties } from 'n8n-workflow';
import { similarThumbnailsSearchDescription } from './getSimilar';

const showOnlyForSimilarThumbnails = {
	resource: ['similarThumbnails'],
};

export const similarThumbnailsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSimilarThumbnails,
		},
		options: [
			{
				name: 'Search Similar Thumbnails',
				value: 'search',
				action: 'Search similar thumbnails',
				description: 'Find similar thumbnails based on text or image URL',
				routing: {
					request: {
						method: 'POST',
						url: '/external/similar-thumbnails/search',
					},
				},
			},
		],
		default: 'search',
	},
	...similarThumbnailsSearchDescription,
];
