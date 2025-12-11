import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	INodeProperties,
} from 'n8n-workflow';
import { config } from '../nodes/Nexlev/config';

export class NexlevApi implements ICredentialType {
	name = 'nexlevApi';

	displayName = 'Nexlev API';

	icon: Icon = 'file:../nodes/Nexlev/nexlev.svg';

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/-nexlev?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-api-key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: config.baseURL,
			url: '/external/analytics/channel-analytics',
			method: 'POST',
			body: {
				channelId: 'UCX6OQ3DkcsbYNE6H8uQQuVA',
			},
		},
	};
}
