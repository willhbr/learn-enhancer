DomReady.ready(() => {
  chrome.storage.sync.get(['auto_login'], (data) => {
    if (data.auto_login) {
      let button = document.querySelector('form#login button');
      let passwordField = document.querySelector('form#login #password');
      const submit = () => {
        if (button) {
          button.click();
        }
        if (passwordField.value == '') {
          let infoLabel = document.querySelector('form#login .control-group > label > label');
          infoLabel.innerHTML = 'Click into the box';
        }
      };
      if (button) {
        window.setTimeout(submit, 1000);
        window.setTimeout(submit, 4000);
      }
      if (passwordField) {
        const other_submit = () => {
          if (passwordField.value != '') {
            submit();
          }
        };
        passwordField.onfocus = other_submit;
        passwordField.onclick = other_submit;
      }
    }
  });
});
