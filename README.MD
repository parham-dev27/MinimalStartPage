![Program Environment](Env.png)

# MinimalStartPage
## Start Page / New Tab for Firefox
* Easy to install
* Offline/Online
---
## Supported Browsers
* Firefox
---
## Tested On
- Linux (Arch, Kali)
- Windows (Windows 10)
- MacOS (macOS Big Sur)
---
## How To Use
- Using Github Pages
    1. Install the [New Tab Override](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/)
    1. Go to extension settings 
    1. Custom URL
    1. Add [this](https://parham-dev27.github.io/MinimalStartPage/) to the URL section
    1. Go to Firefox settings => Home
    1. Change the Homepage and new windows to [this](https://parham-dev27.github.io/MinimalStartPage/)

- Local hosting
    1. `git clone https://github.com/parham-dev27/MinimalStartPage.git`
    1. Add `python3 -m http.server 1250 -d <Directory>` to your autostart files
        - **Note**: Replace the `<Directory>` with where you cloned the repository
    1. Install the [New Tab Override](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/)
    1. Go to extension settings 
    1. Custom URL
    1. Add `127.0.0.1:1250` to the URL section
    1. Go to Firefox settings => Home
    1. Change the Homepage and new windows to `127.0.0.1:1250`
