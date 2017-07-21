const models = {
  ignored_courses: {
    get_value: (elem) => elem.value.split("\n"),
    show_value: (elem, value) => elem.value = value.join("\n"),
    initial_value: []
  },
  auto_login: {
    get_value: (elem) => elem.checked,
    show_value: (elem, value) => elem.checked = value,
    initial_value: false
  }
};

document.addEventListener('DOMContentLoaded', () => {
  let defaults = {};
  for (let key in models) {
    defaults[key] = models[key].initial_value;
  }
  chrome.storage.sync.get(defaults, (data) => {
    for (let key in models) {
      models[key].show_value(document.getElementById(key), data[key]);
    }
  });
});

document.getElementById('save').addEventListener('click', () => {
  let values = {};
  for (let key in models) {
    values[key] = models[key].get_value(document.getElementById(key));
  }
  chrome.storage.sync.set(values, () => {
    // Update status to let user know options were saved.
    let indicator = document.getElementById('status');
    indicator.textContent = 'Settings saved.';
    setTimeout(() => {
      indicator.textContent = '';
    }, 750);
  });
});
