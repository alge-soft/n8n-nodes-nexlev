import type { INodeProperties } from 'n8n-workflow';
import { channelAnalysisCreateJobDescription } from './createJob';
import { channelAnalysisGetResultDescription } from './getResult';

const showOnlyForChannelAnalysis = {
	resource: ['channelAnalysis'],
};

export const channelAnalysisDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForChannelAnalysis,
		},
		options: [
			{
				name: 'Create Job',
				value: 'createJob',
				action: 'Create channel analysis job',
				description: 'Create a new channel analysis job',
				routing: {
					request: {
						method: 'GET',
						url: '/external/channels/analysis/job/create',
					},
				},
			},
			{
				name: 'Get Result',
				value: 'getResult',
				action: 'Get channel analysis result',
				description: 'Get the status and results of a channel analysis job',
				routing: {
					request: {
						method: 'GET',
						url: '/external/channels/analysis/job/status',
					},
				},
			},
		],
		default: 'createJob',
	},
	...channelAnalysisCreateJobDescription,
	...channelAnalysisGetResultDescription,
];
