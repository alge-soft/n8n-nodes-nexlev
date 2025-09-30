import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { similarVideosDescription } from './resources/similarVideos';

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
			baseURL: 'http://localhost:3001/api',
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
						name: 'Similar Videos',
						value: 'similarVideos',
					},
				],
				default: 'similarVideos',
			},
			...similarVideosDescription,
		],
	};
}
