DomReady.ready(() => {
  let container = document.getElementById("resourceobject");
  if(container) {
    return window.location.replace(container.data);
  } else {
    let frame = document.getElementById("cleanSlate");
    if (frame != null) {
      return window.location.replace(frame.src);
    }
  }
  
  let date = new Date();
  if (date.getDate() == 1 && date.getMonth() == 3) {
    let rand = Math.random();
    if(rand < 0.15) {
      aprilFools();
    }
  }

  chrome.storage.sync.get(['auto_login', 'ignored_courses'], (data) => {
    if (data.auto_login) {
      let buttons = document.getElementsByClassName('ucloginbtn');
      if (buttons && buttons[0]) {
        buttons[0].click();
      } else {
        let button = document.querySelector('form#login button');
        if (button) {
          window.setTimeout(() => button.click(), 5000);
        }
      }
    }
    data.ignored_courses.forEach((title) => {
      let node = document.querySelector('.block_course_list [title="' + title + '"]');
      if (node !== null) {
        node.parentNode.parentNode.remove(); // Delete containing <li>
      }
    });
  });
  
  // Lol, James..
  if (document.URL.indexOf("blackboard.vuw.ac.nz/") == -1) {
    let main = document.getElementById('region-main');
    if (!main) {
      return;
    }
    main.className = "span9 pull-right";
    let side = document.getElementById('block-region-side-pre');
    side.className = "span3 desktop-first-column decaf-border decaf-border-right block-region";
  }
});
