'use strict';

let vocab_selector = document.getElementById('vocabulary-selector');
vocab_selector.addEventListener("change", function(){
  let wordlist = vocab_selector.value
  chrome.storage.sync.set({'wordlist': wordlist}, function() {
          console.log('Word list is set to ' + wordlist);
        });
})

document.getElementById("save-btn").addEventListener("click",function(e){
  e.preventDefault()

  console.log("clicked!")

  var b = document.getElementById("save-status");
  b.style.setProperty("-webkit-transition","opacity 0s ease-out");
  b.style.opacity = 1;
  window.setTimeout(function() {
      b.style.setProperty("-webkit-transition", "opacity 1s ease-out");
      b.style.opacity = 0
  }, 1500);

})

chrome.storage.sync.get(['wordlist'], function(result) {
        document.getElementById('vocabulary-selector').value = result.wordlist
  });
