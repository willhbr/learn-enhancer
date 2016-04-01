var listener = function(details) {
  var contentTypeIndex = -1;
  var contentDispositionIndex = -1;
  console.log(details);
  for(var i = 0; i < details.responseHeaders.length; i++) {
    if(details.responseHeaders[i].name.toLowerCase() == 'content-type') {
      if(details.responseHeaders[i].value.toLowerCase() == 'application/x-forcedownload') {
        contentTypeIndex = i;
      }
    } else if(details.responseHeaders[i].name.toLowerCase() == 'content-disposition') {
      contentDispositionIndex = i;
    }
  }
  
  if(contentDispositionIndex !== -1) {
    details.responseHeaders[contentDispositionIndex].value = 'inline';
    if(contentTypeIndex !== -1) {
      var match = details.responseHeaders[contentDispositionIndex].value.toLowerCase().match(/filename=".*?\.(pdf|jpg|png|jpeg)"/)
      var extension = match[1];
      if(match) {
        details.responseHeaders[contentTypeIndex].value = 'application/' + extension;
      }
    }
  }
  return {responseHeaders:details.responseHeaders};
}

chrome.webRequest.onHeadersReceived.addListener(listener, {urls: ['http://learn.canterbury.ac.nz/pluginfile.php/*']}, ['blocking', 'responseHeaders']);