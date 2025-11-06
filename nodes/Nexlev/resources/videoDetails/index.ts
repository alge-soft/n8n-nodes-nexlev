import type { INodeProperties } from 'n8n-workflow';
import { videoDetailsGetDetailsDescription } from './getDetails';
import { videoDetailsGetShortsDetailsDescription } from './getShortsDetails';
import { videoDetailsGetCommentsDescription } from './getComments';
import { videoDetailsGetTranscriptDescription } from './getTranscript';

const showOnlyForVideoDetails = {
	resource: ['videoDetails'],
};

export const videoDetailsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForVideoDetails,
		},
		options: [
			{
				name: 'Get Comments',
				value: 'getComments',
				action: 'Get video comments',
				description: 'Get comments for a YouTube video',
				routing: {
					request: {
						method: 'GET',
						url: '/external/videos/comments',
					},
				},
			},
			{
				name: 'Get Details',
				value: 'getDetails',
				action: 'Get video details',
				description: 'Get detailed information for a YouTube video',
				routing: {
					request: {
						method: 'GET',
						url: '/external/videos/details',
					},
				},
			},
			{
				name: 'Get Shorts Details',
				value: 'getShortsDetails',
				action: 'Get shorts details',
				description: 'Get detailed information for a YouTube shorts video',
				routing: {
					request: {
						method: 'GET',
						url: '/external/shorts/details',
					},
				},
			},
			{
				name: 'Get Transcript',
				value: 'getTranscript',
				action: 'Get video transcript',
				description: 'Get transcript for a YouTube video',
				routing: {
					request: {
						method: 'GET',
						url: '/external/videos/transcript',
					},
				},
			},
		],
		default: 'getDetails',
	},
	...videoDetailsGetCommentsDescription,
	...videoDetailsGetDetailsDescription,
	...videoDetailsGetShortsDetailsDescription,
	...videoDetailsGetTranscriptDescription,
];
