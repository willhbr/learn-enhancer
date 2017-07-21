document.addEventListener('DOMContentLoaded', () => {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    autologin: false,
    ignored_courses: []
  }, (data) => {
    document.getElementById('autologin').checked = data.autologin;
    document.getElementById('ignored_courses').value = data.ignored_courses.join('\n');
  });
});

document.getElementById('save').addEventListener('click', () => {
  let autologin = document.getElementById('autologin').checked;
  let ignored_courses = document.getElementById('ignored_courses').value.split("\n");
  console.log(autologin, ignored_courses);
  chrome.storage.sync.set({
    autologin: autologin,
    ignored_courses: ignored_courses
  }, () => {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(() => {
      status.textContent = '';
    }, 750);
  });
});
