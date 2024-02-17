# Project Notes README

**Welcome to the documentation for your project! These notes are designed to provide you with a clear understanding of key concepts related to npm, package.json, bundlers, and dependencies.**

## npm - Not Just Node Package Manager

_Npm_ stands for more than just the _Node Package Manager_. It's a crucial tool in managing dependencies and packages for your project.

## package.json - Your Project's Configuration

`package.json` is not just a file; it's the heart of your project's configuration for npm. It defines metadata, scripts, and dependencies, giving npm the necessary information to manage your project effectively.

## Bundling for Production

_Bundling_ is the process of packaging your application so that it can be efficiently shipped to production. This is where tools like _Vite_ and _webpack_ come into play. For instance, _Create React App_ relies on the webpack bundler.

- **Vite:** A bundler that leverages the power of modern bundling techniques for faster development.

## Understanding Dependencies

There are two types of dependencies:

1. **Dev Dependencies:** Required for the development environment.
2. **General Dependencies:** Can be used in production.

When specifying dependencies, using "^" ensures automatic updates for minor releases, while "~" ensures automatic updates for major releases.

### Managing Versions

- `package-lock.json`: Keeps track of exact version numbers of dependencies.
- `package.json`: Keeps track of approximate version numbers.

This resolves the classic "It works on my machine but not on production" dilemma.

## The node_modules Directory

`node_modules` is where the actual packages needed for your project reside. Dev dependencies, like _Parcel_ in this case, have their dedicated folders. However, there are also transitive dependencies required by these tools.

## Best Practices

- **Security:** Never put anything reproducible, especially sensitive information, on GitHub.

## NPX

`npx` - executing the package directly

## CDN

- `cdn` links is not a preferred way as its a costly operation as we need to make a network call to get a package

## Parcel - more than just a bundler

- HMR (HOT MODULE REPLACEMENT)
- Local Server
- Dev build
- File watching algo written in cpp
- Caching (Faster build)
- Bundling
- Minification
- Compressing
- Code splitting
- Differential Bundling- to support older browser
- Consistent Hashing
- Tree Shaking- removing of unused code
- Different dev and prod build

  _These notes aim to be a quick reference guide for your project's key concepts. Happy coding!_
