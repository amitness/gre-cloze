'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({'wordlist': 'magoosh','switch':true}, function() {
          console.log('Word list is set to ' + 'magoosh');
        });
  chrome.tabs.create({
    url: 'options.html',
    active: true
  });

});
