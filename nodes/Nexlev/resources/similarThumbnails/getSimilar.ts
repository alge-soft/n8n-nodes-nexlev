import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSimilarThumbnailsSearch = {
	operation: ['search'],
	resource: ['similarThumbnails'],
};

export const similarThumbnailsSearchDescription: INodeProperties[] = [
	{
		displayName: 'Search Type',
		name: 'searchType',
		type: 'options',
		options: [
			{
				name: 'Text',
				value: 'text',
			},
			{
				name: 'Image URL',
				value: 'image_url',
			},
		],
		default: 'text',
		required: true,
		displayOptions: {
			show: showOnlyForSimilarThumbnailsSearch,
		},
		description: 'Type of search to perform',
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				...showOnlyForSimilarThumbnailsSearch,
				searchType: ['text'],
			},
		},
		description: 'Text query to search for similar thumbnails',
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
	},
	{
		displayName: 'Image URL',
		name: 'image_url',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				...showOnlyForSimilarThumbnailsSearch,
				searchType: ['image_url'],
			},
		},
		description: 'Image URL to search for similar thumbnails',
		routing: {
			send: {
				type: 'body',
				property: 'image_url',
			},
		},
	},
];
