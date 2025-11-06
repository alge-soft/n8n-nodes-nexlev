import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { config } from './config';
import { similarVideosDescription } from './resources/similarVideos';
import { similarThumbnailsDescription } from './resources/similarThumbnails';
import { similarChannelsDescription } from './resources/similarChannels';
import { channelAnalyticsDescription } from './resources/channelAnalytics';
import { channelAnalysisDescription } from './resources/channelAnalysis';
import { channelContentDescription } from './resources/channelContent';
import { videoDetailsDescription } from './resources/videoDetails';

export class Nexlev implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Nexlev',
		name: 'nexlev',
		icon: { light: 'file:nexlev.svg', dark: 'file:nexlev.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Nexlev API',
		defaults: {
			name: 'Nexlev',
		},
		usableAsTool: true,
		inputs: ['main'],
		outputs: ['main'],
		credentials: [{ name: 'nexlevApi', required: true }],
		requestDefaults: {
			baseURL: config.baseURL,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Channel Analysis',
						value: 'channelAnalysis',
					},
					{
						name: 'Channel Analytic',
						value: 'channelAnalytics',
					},
					{
						name: 'Channel Content',
						value: 'channelContent',
					},
					{
						name: 'Similar Channel',
						value: 'similarChannels',
					},
					{
						name: 'Similar Thumbnail',
						value: 'similarThumbnails',
					},
					{
						name: 'Similar Video',
						value: 'similarVideos',
					},
					{
						name: 'Video Detail',
						value: 'videoDetails',
					},
				],
				default: 'similarVideos',
			},
			...channelAnalyticsDescription,
			...channelAnalysisDescription,
			...channelContentDescription,
			...similarVideosDescription,
			...similarThumbnailsDescription,
			...similarChannelsDescription,
			...videoDetailsDescription,
		],
	};
}
