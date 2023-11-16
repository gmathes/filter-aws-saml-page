chrome.browserAction.onClicked.addListener(function() {
    chrome.storage.local.get('userUrl', function(data) {
      if (data.userUrl) {
        chrome.tabs.create({ url: data.userUrl });
      } else {
        console.log('No URL is set.');
      }
    });
  });