chrome.webRequest.onHeadersReceived.addListener(function(details) {
  for(var i = 0; i < details.responseHeaders.length; i++) {
    if(details.responseHeaders[i].name.toLowerCase() == 'content-type') {
      if(details.responseHeaders[i].value.toLowerCase() == 'application/x-forcedownload') {
        details.responseHeaders[i].value = 'application/pdf';
      }
    } else if(details.responseHeaders[i].name.toLowerCase() == 'content-disposition') {
      details.responseHeaders[i].value = 'inline';
    }
  }
  return {responseHeaders:details.responseHeaders};
}, {urls: ['http://learn.canterbury.ac.nz/pluginfile.php/*']}, ['blocking', 'responseHeaders']);