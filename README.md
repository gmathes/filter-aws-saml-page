# Background

AWS' SAML landing page requires a lot of scrolling if you have a large number of accounts. This Chrome extension adds a text input that filters that list based on the account name or number.

## Installing

1. Clone this repo
2. Open Chrome extensions <chrome://extensions/>
   - Enable developer mode (upper right corner)
   - Drag the extension folder in this repo onto the extensions page
3. Load AWS' SAML landing page
   - <https://signin.aws.amazon.com/saml>

## Usage

Use filter box when logging into AWS through SAML to filter accounts by name.
Use the "enter" key to select the first filtered account and "enter" again to
log in without using the mouse.
