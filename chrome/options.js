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

const button = document.getElementById('save');
button.addEventListener('click', () => {
  let values = {};
  for (let key in models) {
    values[key] = models[key].get_value(document.getElementById(key));
  }
  chrome.storage.sync.set(values, () => {
    // Update status to let user know options were saved.
    button.textContent = 'Saved!';
    let oldBackgroundColor = button.style.backgroundColor;
    button.style.backgroundColor = '#43A047';
    let oldBorderColor = button.style.borderColor;
    button.style.borderColor = '#2E7D32';
    window.setTimeout(() => {
      button.style.backgroundColor = oldBackgroundColor;
      button.style.borderColor = oldBorderColor;
      button.textContent = 'Save';
    }, 1000)
  });
});
