// Save the URL when the form is submitted
document.getElementById('optionsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var url = document.getElementById('url').value;
    chrome.storage.local.set({ userUrl: url }, function() {
      console.log('URL is saved.');
    });
  });
  
// Load the URL when the options page is opened
document.addEventListener('DOMContentLoaded', function() {
chrome.storage.local.get('userUrl', function(data) {
    document.getElementById('url').value = data.userUrl || '';
});
});