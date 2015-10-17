DomReady.ready(function() {
  var thing = document.getElementById("resourceobject");
  if(thing != null) {
    window.location.replace(thing.data);
  } else {
    var frame = document.getElementById("cleanSlate");
    if(frame != null) {
      window.location.replace(frame.src);
    }
  }
  // Lol, James..
  if(document.URL.indexOf("blackboard.vuw.ac.nz/") != -1) {
    var nameLink = document.getElementById("global-nav-link");
    var oldHTML = nameLink.innerHTML;
    nameLink.innerHTML = oldHTML.replace("James Wright", '"Will is Awesome!" - James Wright');
  } else {
    var main = document.getElementById('region-main');
    main.className = "span9 pull-right";
    var side = document.getElementById('block-region-side-pre');
    side.className = "span3 desktop-first-column decaf-border decaf-border-right block-region";
    var header = document.getElementsByClassName('navbar')[0];
    header.className = "navbar navbar-static-top moodle-has-zindex";
  }
});