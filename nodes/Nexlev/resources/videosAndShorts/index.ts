import type { INodeProperties } from 'n8n-workflow';
import { videoDetailsGetDetailsDescription } from './getDetails';
import { videoDetailsGetShortsDetailsDescription } from './getShortsDetails';
import { videoDetailsGetCommentsDescription } from './getComments';
import { videoDetailsGetTranscriptDescription } from './getTranscript';
import { videoDetailsGetBulkTranscriptDescription } from './getBulkTranscript';
import { videoDetailsGetSubtitleDescription } from './getSubtitle';
import { videoDetailsGetBulkSubtitleDescription } from './getBulkSubtitle';
import { videoDetailsGetRPMDescription } from './getRPM';

const showOnlyForVideosAndShorts = {
	resource: ['videosAndShorts'],
};

export const videoDetailsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForVideosAndShorts,
		},
		options: [
			{
				name: 'Get Bulk Subtitle',
				value: 'getBulkSubtitle',
				action: 'Get bulk video subtitles',
				description: 'Get subtitles for multiple YouTube videos at once',
				routing: {
					request: {
						method: 'POST',
						url: '/external/videos/bulk-subtitle',
					},
				},
			},
			{
				name: 'Get Bulk Transcript',
				value: 'getBulkTranscript',
				action: 'Get bulk video transcripts',
				description: 'Get transcripts for multiple YouTube videos at once',
				routing: {
					request: {
						method: 'POST',
						url: '/external/videos/bulk-transcript',
					},
				},
			},
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
				name: 'Get RPM',
				value: 'getRPM',
				action: 'Get video RPM',
				description: 'Get RPM (Revenue Per Mille) for a YouTube video',
				routing: {
					request: {
						method: 'GET',
						url: '/external/videos/rpm',
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
				name: 'Get Subtitle',
				value: 'getSubtitle',
				action: 'Get video subtitle',
				description: 'Get subtitle for a YouTube video',
				routing: {
					request: {
						method: 'GET',
						url: '/external/videos/subtitle',
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
	...videoDetailsGetRPMDescription,
	...videoDetailsGetShortsDetailsDescription,
	...videoDetailsGetTranscriptDescription,
	...videoDetailsGetBulkTranscriptDescription,
	...videoDetailsGetSubtitleDescription,
	...videoDetailsGetBulkSubtitleDescription,
];
