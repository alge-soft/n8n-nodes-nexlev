import type { INodeProperties } from 'n8n-workflow';
import { similarChannelsSearchDescription } from './search';

const showOnlyForSimilarChannels = {
	resource: ['similarChannels'],
};

export const similarChannelsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSimilarChannels,
		},
		options: [
			{
				name: 'Search Similar Channels',
				value: 'search',
				action: 'Search similar channels',
				description: 'Find similar channels based on a YouTube channel',
				routing: {
					request: {
						method: 'POST',
						url: '/external/similar-channels/search',
					},
				},
			},
		],
		default: 'search',
	},
	...similarChannelsSearchDescription,
];
