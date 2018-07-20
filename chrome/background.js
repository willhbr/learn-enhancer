/*global chrome*/
let listener = (details) => {
  let contentTypeIndex = -1;
  let contentDispositionIndex = -1;
  for (let i = 0; i < details.responseHeaders.length; i++) {
    if(details.responseHeaders[i].name.toLowerCase() == 'content-type') {
      if(details.responseHeaders[i].value.toLowerCase() == 'application/x-forcedownload') {
        contentTypeIndex = i;
      }
    } else if (details.responseHeaders[i].name.toLowerCase() == 'content-disposition') {
      contentDispositionIndex = i;
    }
  }

  if (contentDispositionIndex !== -1) {
    details.responseHeaders[contentDispositionIndex].value = 'inline';
    if (contentTypeIndex !== -1) {
      let match = details.responseHeaders[contentDispositionIndex].value.toLowerCase().match(/filename=".*?\.(pdf|jpg|png|jpeg)"/);
      let extension = match[1];
      if (match) {
        details.responseHeaders[contentTypeIndex].value = 'application/' + extension;
      }
    }
  }
  return { responseHeaders: details.responseHeaders };
};

chrome.webRequest.onHeadersReceived.addListener(
  listener,
  {
    urls: [
      'http://learn.canterbury.ac.nz/pluginfile.php/*',
      'https://learn.canterbury.ac.nz/pluginfile.php/*'
    ]
  },
  ['blocking', 'responseHeaders']
);
