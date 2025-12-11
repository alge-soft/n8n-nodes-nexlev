import type { INodeProperties } from 'n8n-workflow';

const showOnlyForChannelAnalysisGetResult = {
	operation: ['getResult'],
	resource: ['channelAnalysis'],
};

export const channelAnalysisGetResultDescription: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'jobId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForChannelAnalysisGetResult,
		},
		description: 'The job ID to get status and results for',
		routing: {
			send: {
				type: 'query',
				property: 'job_id',
			},
		},
	},
];
