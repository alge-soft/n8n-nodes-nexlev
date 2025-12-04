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

### Channel Analysis

- **Create Job**: Create a new channel analysis job
- **Get Result**: Get the status and results of a channel analysis job

### Channel Analytics

- **Get Analytics**: Retrieve comprehensive analytics data for a YouTube channel
- **Get Geography Demographics Revenue**: Get geographic distribution, demographic breakdown, and revenue data
- **Get Short vs Long Views**: Compare short-form vs long-form content performance

### Channel Content

- **Get About**: Get about information for a YouTube channel
- **Get Videos**: Get videos from a YouTube channel
- **Get Shorts**: Get short videos from a YouTube channel

### Niche Overview

- **Analyze**: Analyze and get niche overview for a YouTube channel

### Similar Channels

- **Search Similar Channels**: Find similar YouTube channels based on content type and audience

### Similar Thumbnails

- **Search Similar Thumbnails**: Discover similar video thumbnails for content inspiration

### Similar Videos

- **Get Similar Videos**: Find videos similar to a given video with similarity scores

### Videos and Shorts

- **Get Comments**: Get comments for a YouTube video
- **Get Details**: Get detailed information for a YouTube video
- **Get Shorts Details**: Get detailed information for a YouTube shorts video
- **Get Transcript**: Get transcript for a YouTube video

## Credentials

To use this node, you need to obtain an API key from Nexlev.

### Prerequisites

- Sign up for a Nexlev account and get your API key at [dashboard.nexlev.io/n8n-youtube](https://dashboard.nexlev.io/n8n-youtube)
- The dashboard provides everything you need to get started with the n8n integration

### Authentication Method

- **API Key**: Enter your Nexlev API key in the credential configuration
- The API key is sent via the `x-api-key` header in all requests

## Compatibility

- **Minimum n8n version**: 1.0.0
- **Tested with**: n8n 1.x
- **Node version**: 0.1.10

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
- [Nexlev n8n Integration Dashboard](https://dashboard.nexlev.io/n8n-youtube) - Get your API key and documentation

## Version history

### 0.1.10

- Fixed channel analysis job creation endpoint to use GET method

### 0.1.9

- Added comprehensive operations documentation for all resources
- Improved .gitignore with best practices
- Better repository structure

### 0.1.8

- Updated documentation with correct Nexlev dashboard links
- Improved getting started experience

### 0.1.7

- Bug fixes and improvements
- Enhanced stability

### 0.1.6

- Improvements and updates

### 0.1.0

- Initial release
- Support for Channel Analytics operations (Get Analytics, Geography/Demographics/Revenue, Short vs Long Views)
- Support for Similar Videos discovery
- Support for Similar Thumbnails search
- Support for Similar Channels discovery
- API key authentication
- Multi-environment support (local, dev, prod)
