chrome.webRequest.onHeadersReceived.addListener(function(details) {
  var contentTypeIndex = -1;
  var contentDispositionIndex = -1;
  for(var i = 0; i < details.responseHeaders.length; i++) {
    if(details.responseHeaders[i].name.toLowerCase() == 'content-type') {
      if(details.responseHeaders[i].value.toLowerCase() == 'application/x-forcedownload') {
        contentTypeIndex = i;
      }
    } else if(details.responseHeaders[i].name.toLowerCase() == 'content-disposition') {
      contentDispositionIndex = i;
    }
  }
  var match = details.responseHeaders[contentDispositionIndex].value.toLowerCase().match(/filename=".*?\.(pdf|jpg|png|jpeg)"/)
  if(match != null) {
    var extension = match[1];
    details.responseHeaders[contentDispositionIndex].value = 'inline';
    details.responseHeaders[contentTypeIndex].value = 'application/' + extension;
  }
  return {responseHeaders:details.responseHeaders};
}, {urls: ['http://learn.canterbury.ac.nz/pluginfile.php/*']}, ['blocking', 'responseHeaders']);