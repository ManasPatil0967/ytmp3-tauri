# YouTube to MP3 Converter
This is a simple YouTube to MP3 converter that uses the youtube-dl library to download the video and ffmpeg to convert it to an MP3 file. The app uses Tauri to create a desktop app from the web app.

## Installation
1. Clone the repository
2. Install the dependencies
```bash
npm install
```
3. Run the app
```bash
npm run tauri dev
```

## Usage
First, to use it on desktop, you need to build the app. To do that, run the following command:
```bash
npm run tauri build
```
After building the app, you can find the setup file in the `src-tauri/target/release/bundle/msi` directory.
To use the app, follow these steps:
1. Paste the YouTube video URL in the input field
2. Click the "Download" button
3. Wait for the download to finish

## Install
To install ytmp3-tauri on Windows, use the msi package in the latest release. To use the app on other platforms, you need to build the app from the source code. Currently, Tauri supports building for Windows, macOS, and Linux (Debian and Ubuntu).