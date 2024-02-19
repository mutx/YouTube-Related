# YouTube Related Videos Enabler

An extension for Chromium based browsers (Brave, Edge, Chrome, Opera, Vilvadi, ...) that automatically enables the "Related" reccomended  in the Reccomended Videos section.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Bugs](#bugs)
- [License](#license)

## Installation

Clone the repository to a local folder.

Enable "Developer Mode" in your browser's extension settings.

Load the local folder (using "Load Unpacked") in your brower's extension menu.

## Usage

This will automatically run. No user interaction required.

## Bugs

The extension currently cannot detect when a new video loads (and therefore needs to enabled the "Related" button again) if another tab is focused, and the YouTube tab is in the background. This will be fixed in future iterations using Service Workers to allow the extentsion to run in the background.

## License

This project uses GPLv3. 