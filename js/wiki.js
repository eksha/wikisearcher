/*
Takes in The term to be looked for in wiktionary
And renders it to the popup
*/
function getResult(term){
  var base_url ='https://en.wiktionary.org';
  //Making call to the wiktionary api for the term to be searched
  $.getJSON(base_url+'/w/api.php?action=parse&format=json&prop=text|revid|displaytitle&callback=?&page='+term,function(json){
  console.log(json);
  if(json.error!=undefined){
    document.getElementById("title").textContent=term;
    document.getElementById("result").innerHTML= "<b>Word Not Found :(</b>"
}
else {
  document.getElementById("title").textContent=term;
  document.getElementById("result").innerHTML= json.parse.text['*'];
}

  console.log('happening');
});
}
document.addEventListener('DOMContentLoaded',function(){
  //send message to webpage.js content script to respond with the selected text from the webpage DOM
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {action: "selected"}, function(response) {
    console.log(response.term);

    getResult(response.term);
  });
});

})
