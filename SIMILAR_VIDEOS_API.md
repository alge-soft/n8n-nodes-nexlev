# Similar Videos API Implementation

## Overview

Successfully implemented the Similar Videos API endpoint in the Nexlev n8n node.

## API Details

### Endpoint

- **URL**: `http://localhost:3001/api/external/similar-videos/videos`
- **Method**: POST
- **Authentication**: API Key via `x-api-key` header

### Request Body Parameters

- **videoId** (required): YouTube video ID

### Response Structure

```typescript
export type Root = Root2[];

export interface Root2 {
	title: string;
	similarity_score: number;
	format_score: number;
	type: string;
	videoId: string;
	channelTitle: string;
	channelId: string;
	channelThumbnail: ChannelThumbnail[];
	description: string;
	viewCount: string;
	publishedTimeText: string;
	lengthText: string;
	thumbnail: Thumbnail[];
	richThumbnail: RichThumbnail[];
}

export interface ChannelThumbnail {
	url: string;
	width: number;
	height: number;
}

export interface Thumbnail {
	url: string;
	width: number;
	height: number;
}

export interface RichThumbnail {
	url: string;
	width: number;
	height: number;
}
```

## Files Created/Modified

### New Files

1. `/nodes/Nexlev/resources/similarVideos/index.ts` - Main resource definition
2. `/nodes/Nexlev/resources/similarVideos/getSimilar.ts` - Operation parameters

### Modified Files

1. `/nodes/Nexlev/Nexlev.node.ts` - Added Similar Videos resource
2. `/credentials/NexlevApi.credentials.ts` - Already configured with API key authentication

## How to Use in n8n

### 1. Setup Credentials

1. In n8n, create a new credential of type "Nexlev API"
2. Enter your API key
3. Save the credential

### 2. Add the Node to Your Workflow

1. Add a "Nexlev" node to your workflow
2. Select "Similar Videos" as the Resource
3. Select "Get Similar Videos" as the Operation
4. Fill in the required field:
   - **Video ID**: e.g., `gpyYCTgJO88`

### 3. Execute the Workflow

The node will make a POST request to your API with the provided data and return the similar videos response.

## Testing the Implementation

### 1. Build the Node

```bash
cd /Volumes/Office/Nexlev/n8n/research/n8n-nodes-nexlev
npm run build
```

### 2. Link the Node Locally (for testing in n8n)

```bash
npm link
```

### 3. In your n8n installation directory

```bash
npm link n8n-nodes-nexlev
```

### 4. Restart n8n

```bash
n8n start
```

## Authentication

The credentials are configured to send the API key via the `x-api-key` header:

- Header: `x-api-key: YOUR_API_KEY`

If you need to use Bearer token authentication instead, modify the credentials file:

```typescript
authenticate: IAuthenticateGeneric = {
	type: 'generic',
	properties: {
		headers: {
			Authorization: '=Bearer {{$credentials.apiKey}}',
		},
	},
};
```

## Build Status

✅ Build successful - All TypeScript files compiled without errors
✅ Similar Videos resource properly integrated
✅ Credentials configured and ready to use
