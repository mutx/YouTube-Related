# YouTube Related

An extension for Chromium based browsers (Brave, Edge, Chrome, Opera, Vilvadi, ...) that automatically enables/clicks the "Related" button in the recommended videos when watching a YouTube video. YouTube's default for recommended videos is to show you content that you've already seen, or unrelated videos that are trending.

## Installation

Clone the repository to a local folder.

Enable "Developer Mode" in your browser's extension settings.

Load the local folder (using "Load Unpacked") in your brower's extension menu.

## Usage

This extension will automatically run whenever you are on a YouTube site.

## Known Bugs

The extension currently cannot detect when a new video loads, if another tab is focused, and the YouTube tab that's autoplaying/switching is in the background focus. This will be fixed in future iterations using Service Workers to allow the extentsion to run in the background.

## License

This project uses GPLv3. 
