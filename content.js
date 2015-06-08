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
    document.getElementById("page-header").style.display = "none";
  }
});