# n8n-nodes-nexlev

This is an n8n community node. It lets you use Nexlev in your n8n workflows.

Nexlev is a YouTube analytics and similarity discovery platform that helps content creators analyze channel performance and discover similar content across YouTube.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

The Nexlev node supports the following operations:

### Channel Analytics

- **Get Analytics**: Retrieve comprehensive analytics data for a YouTube channel including views, subscribers, revenue metrics, and performance indicators
- **Get Geography Demographics Revenue**: Get detailed geographic distribution, demographic breakdown, and revenue data for a YouTube channel
- **Get Short vs Long Views**: Compare short-form video performance against long-form content for a YouTube channel

### Similar Videos

- **Get Similar Videos**: Find videos similar to a given YouTube video based on content analysis, returning similarity scores and video metadata

### Similar Thumbnails

- **Search Similar Thumbnails**: Discover similar video thumbnails based on text descriptions or image URLs, useful for content inspiration and trend analysis

### Similar Channels

- **Search Similar Channels**: Find YouTube channels similar to a given channel based on content type, audience demographics, and performance metrics

## Credentials

To use this node, you need to obtain an API key from Nexlev.

### Prerequisites

- Sign up for a Nexlev account at [nexlev.io](https://nexlev.io)
- Generate an API key from your Nexlev dashboard

### Authentication Method

- **API Key**: Enter your Nexlev API key in the credential configuration
- The API key is sent via the `x-api-key` header in all requests

## Compatibility

- **Minimum n8n version**: 1.0.0
- **Tested with**: n8n 1.x
- **Node version**: 0.1.0

## Usage

### Basic Setup

1. **Install the node** following the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/)
2. **Create credentials** with your Nexlev API key
3. **Add the Nexlev node** to your workflow
4. **Select a resource** (Channel Analytics, Similar Videos, Similar Thumbnails, or Similar Channels)
5. **Choose an operation** and fill in the required parameters

### Example: Getting Similar Videos

1. Add the Nexlev node to your workflow
2. Select "Similar Videos" as the Resource
3. Select "Get Similar Videos" as the Operation
4. Enter a YouTube video ID (e.g., `gpyYCTgJO88`)
5. The node will return a list of similar videos with similarity scores and metadata

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Nexlev Documentation](https://nexlev.io/docs)
- [YouTube Analytics API](https://developers.google.com/youtube/analytics)

## Version history

### 0.1.0

- Initial release
- Support for Channel Analytics operations (Get Analytics, Geography/Demographics/Revenue, Short vs Long Views)
- Support for Similar Videos discovery
- Support for Similar Thumbnails search
- Support for Similar Channels discovery
- API key authentication
- Multi-environment support (local, dev, prod)
