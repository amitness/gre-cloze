'use strict';

chrome.storage.sync.get(["switch"], function(result){
  if(result.switch){
    document.getElementById("on-switch").checked=true;
  } else{
    document.getElementById("off-switch").checked=true;
  }

})

document.getElementsByName("switch").forEach(
  function(button){
    button.addEventListener("click",function(event){
      let selected_button = event.target.value

      chrome.tabs.query({}, tabs => {
          tabs.forEach(tab => {
          console.log("sending message..."+selected_button)
          chrome.tabs.sendMessage(tab.id, {"switch":selected_button=="on"});
        });
      });

    }
  )
})
