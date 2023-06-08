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
    2. Go to extension settings 
    3. Custom URL
    4. Add [this](https://parham-dev27.github.io/MinimalStartPage/) to the URL section
    5. Go to Firefox settings => Home
    6. Change the Homepage and new windows to [this](https://parham-dev27.github.io/MinimalStartPage/)

- Local hosting
    1. `git clone https://github.com/parham-dev27/MinimalStartPage.git`
    2. Add `python3 -m http.server 1250 -d <Directory>` to your autostart files
        - **Note**: Replace the `<Directory>` with where you cloned the repository
    3. Install the [New Tab Override](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/)
    4. Go to extension settings 
    5. Custom URL
    6. Add `127.0.0.1:1250` to the URL section
    7. Go to Firefox settings => Home
    8. Change the Homepage and new windows to `127.0.0.1:1250`