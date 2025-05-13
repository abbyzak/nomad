# Building Nomad for Different Platforms

This document provides detailed instructions for building Nomad Browser for macOS and Windows platforms.

## Prerequisites

Make sure you have:

1. Node.js 14 or higher installed
2. Git installed
3. Platform-specific requirements (see below)

## General Build Process

1. Clone the repository:
   ```bash
   git clone https://github.com/abbbyzak/nomad.git
   cd nomad
   ```

2. Install dependencies:
   ```bash
   cd scripts
   npm install
   ```

3. Build the source:
   ```bash
   npm run build
   ```

## Building for macOS

### Requirements

- macOS 10.15 Catalina or newer
- Xcode Command Line Tools
- Apple Developer account (for notarization)

### Install Dependencies

```bash
brew install libtool autoconf automake
```

### Building a DMG

1. Run the build command:
   ```bash
   npm run build:mac
   ```

2. For notarization (recommended for distribution):
   ```bash
   export appleId=your.email@example.com
   export appleIdPassword=your-app-specific-password
   npm run build:mac
   ```

   You can generate an app-specific password from your Apple ID account page.

### Troubleshooting macOS Builds

- If you encounter errors related to native modules, try:
  ```bash
  npm run rebuild
  ```

- For notarization issues, check the logs and make sure your Apple Developer account has the correct capabilities.

## Building for Windows

### Requirements

- Windows 10 or newer
- Visual Studio 2017 or newer with Desktop development with C++ workload
- Python 2.7 (for native module builds)

### Install Dependencies

1. Install Python 2.7 from [python.org](https://www.python.org/downloads/release/python-2711/)

2. Install necessary tools:
   ```powershell
   npm config set python c:/python27
   npm config set msvs_version 2017
   npm install -g node-gyp
   npm install -g gulp
   ```

### Building the Installer (MSI)

```powershell
npm run build:win
```

### Building the Portable Version

```powershell
npm run build:win-portable
```

### Code Signing (Optional)

For signed Windows builds, you need a code signing certificate (.pfx file):

```powershell
$env:CSC_LINK = "path\to\certificate.pfx"
$env:CSC_KEY_PASSWORD = "your-certificate-password"
npm run build:win
```

### Troubleshooting Windows Builds

- If you encounter `node-gyp` errors:
  ```powershell
  npm run burnthemall
  ```

- If electron-builder fails, check if you have antivirus software that might be interfering with the build process.

## Build Output

All builds will be placed in the `nomad/dist` directory. The files produced will be:

- For macOS: `Nomad-x.x.x.dmg`
- For Windows installer: `Nomad-Setup-x.x.x.exe`
- For Windows portable: `Nomad-Portable-x.x.x.exe`

## Staying Up-to-Date

When pulling the latest code, it's recommended to run:

```bash
npm run burnthemall
```

This will ensure all dependencies are properly rebuilt for the current version.

## Advanced Configuration

For advanced electron-builder configuration, you can modify the `build` section in `nomad/scripts/package.json`. See the [electron-builder documentation](https://www.electron.build/) for all available options. 