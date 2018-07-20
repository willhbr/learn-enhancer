/*global chrome*/
/*global aprilFools*/
(() => {
  let container = document.getElementById('resourceobject');

  if (container) {
    return window.location.replace(container.data);
  } else {
    let frame = document.getElementById('cleanSlate');
    if (frame != null) {
      return window.location.replace(frame.src);
    }
  }

  let date = new Date();
  if (date.getDate() == 1 && date.getMonth() == 3) {
    let rand = Math.random();
    if (rand < 0.15) {
      return aprilFools();
    }
  }

  chrome.storage.sync.get(['auto_login', 'ignored_courses'], (data) => {
    if (data.auto_login) {
      let buttons = document.getElementsByClassName('ucloginbtn');
      if (buttons && buttons[0]) {
        buttons[0].click();
      }
    }
    if (data.ignored_courses) {
      data.ignored_courses.forEach((title) => {
        let node = document.querySelector('.block_course_list [title="' + title + '"]');
        if (node !== null) {
          node.parentNode.parentNode.remove();
        }
      });
    }

  });
  let main = document.getElementById('region-main');
  if (main) {
    main.className = 'span9 pull-right';
    let side = document.getElementById('block-region-side-pre');
    if (side) {
      side.className = 'span3 desktop-first-column decaf-border decaf-border-right block-region';
    }
  }
})();
