# Publishing Guide

This guide explains how to publish a new version of the `@nexlev/n8n-nodes-nexlev` package to npm.

## Prerequisites

Before publishing, ensure you have:

- **npm account** with access to the `@nexlev` organization
- **npm authentication** configured locally (`npm login`)
- **Git repository** access with push permissions
- **Clean working directory** (all changes committed)

## Publishing Flow

### 1. Version Bump

Update the version number in `package.json`:

```json
{
	"version": "0.1.x"
}
```

Follow [Semantic Versioning](https://semver.org/):

- **Patch** (0.1.x): Bug fixes and minor improvements
- **Minor** (0.x.0): New features, backward compatible
- **Major** (x.0.0): Breaking changes

### 2. Update Documentation

Update the following files to reflect the new version:

#### README.md

1. Update the node version in the Compatibility section:

```markdown
- **Node version**: 0.1.x
```

2. Add a new entry to the Version History section:

```markdown
### 0.1.x

- Feature/fix description
- Another change
```

#### CHANGELOG.md (Optional)

If maintaining a detailed changelog, add the changes for the new version.

### 3. Build the Project

Run the build command to compile TypeScript and generate distribution files:

```bash
npm run build
```

This will:

- Compile TypeScript files in `nodes/` to JavaScript in `dist/`
- Copy static assets (SVG icons, JSON files)
- Generate source maps and type definitions

### 4. Commit Changes

Commit the version bump, documentation updates, and build artifacts:

```bash
# Stage the changes
git add package.json README.md dist/

# Commit with a descriptive message
git commit -m "chore: bump version to 0.1.x and update documentation"
```

### 5. Publish to npm

The package uses a `prepublishOnly` hook that enforces using the release script. To publish:

**Option A: Using npm publish (Recommended for quick releases)**

```bash
npm publish --access public --ignore-scripts
```

The `--ignore-scripts` flag bypasses the `prepublishOnly` hook since we've already built the project.

**Option B: Using the release script (Interactive)**

```bash
npm run release
```

This runs the `n8n-node release` command which:

- Runs linting and build
- Generates a changelog
- Prompts for version increment
- Creates git tags
- Publishes to npm

> **Note**: This method requires user interaction and GITHUB_TOKEN for automated releases.

### 6. Push to Git

Push your commits and tags to the remote repository:

```bash
# Push commits
git push origin dev

# If tags were created, push them too
git push origin --tags
```

## Environment-Specific Builds

The package supports multiple environment configurations:

```bash
# Development environment
npm run build:dev

# Local environment
npm run build:local

# Production environment
npm run build:prod
```

The environment is set via the `NEXLEV_ENV` variable and affects the API base URLs in `config.ts`.

## Troubleshooting

### "Working dir must be clean" Error

The release script requires a clean working directory. Ensure all changes are committed:

```bash
git status
git add .
git commit -m "your message"
```

### "prepublishOnly" Hook Blocking Publish

If the `prepublishOnly` hook is blocking direct publishing:

```bash
npm publish --access public --ignore-scripts
```

### Authentication Errors

Ensure you're logged in and have access to the `@nexlev` organization:

```bash
npm whoami
npm org ls nexlev
```

### Version Conflict

If the version already exists on npm, bump to a higher version number before publishing.

## Quick Reference

Full publishing workflow in one go:

```bash
# 1. Update version in package.json and README.md manually

# 2. Build the project
npm run build

# 3. Commit changes
git add package.json README.md dist/
git commit -m "chore: bump version to X.X.X and update documentation"

# 4. Publish to npm
npm publish --access public --ignore-scripts

# 5. Push to repository
git push origin dev
```

## Best Practices

1. **Test Before Publishing**: Always test the package locally before publishing
2. **Follow Semver**: Use appropriate version numbers based on the changes
3. **Document Changes**: Update README and version history
4. **Commit Build Artifacts**: Always commit the `dist/` folder before publishing
5. **Tag Releases**: Consider creating git tags for releases
6. **Changelog**: Maintain a clear changelog for users
7. **Breaking Changes**: Clearly document any breaking changes in the documentation

## Package Configuration

The package publishes only the `dist/` directory as specified in `package.json`:

```json
{
	"files": ["dist"]
}
```

Ensure all necessary files are in the `dist/` directory before publishing.

## Support

For issues or questions about publishing:

- Check npm documentation: https://docs.npmjs.com/
- Review n8n node documentation: https://docs.n8n.io/integrations/creating-nodes/
- Nexlev n8n Integration: https://dashboard.nexlev.io/n8n-youtube
- Contact: contact@nexlev.io
