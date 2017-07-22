
console.log("Hey there look Im WEBPAGE!");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
/*
If the background script asks to send back the higlighted/selected text,
Do the following!
*/
    if (request.action == "selected"){
      var sel=window.getSelection().toString();
      console.log(sel);
      sendResponse({term: sel});
    }

  });
