function aprilFools() {
  function add(content, front) {
    if(front) {
      document.body.innerHTML = content + document.body.innerHTML;
    } else {
      document.body.innerHTML += content;
    }
  }
  add('<h1 style="font-size:100px;text-align:center">&larr; APRIL FOOLS &rarr;</h1>', true);
  [
    function() {
      add("<style>*:not(:hover) { font-family: 'Wingdings' !important; }</style>", true);
    },
    function() {
      var deg = (Math.random() * 140) + 20;
      add('<style>div{transform:rotate(' + deg + 'deg);}</style>');
    },
    function() {
      add("<style>div {animation: marquee 3s linear infinite;} @keyframes marquee {0%   {margin: 0px;}25%  {margin: 5px;}50%  {margin: 10px;}75%  {margin: 5px;}100% {margin: 0px;}}</style>");
    },
    function() {
      var styles = ".block {animation: spin-baby 6s linear infinite;} @keyframes spin-baby {from {transform: rotate(0deg);} to {transform: rotate(360deg);}}";
      styles += ".forumpost {animation: spin-baby-rev 12s linear infinite;} @keyframes spin-baby-rev {from {transform: rotate(360deg);} to {transform: rotate(0deg);}}"
      add("<style>" + styles + "</style>");
    },
    function() {
      var styles = ".block div {animation: hue-baby 1s linear infinite;} @keyframes hue-baby {0% {background-color: #990886;} 50% {background-color: #0F990D;} 100% {background-color: #990886;}}";
      add("<style>" + styles + "</style>");
    },
    function() {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    },
    function() {
      add("<style>div{transform:rotate(180deg);}</style>")
    },
    function() {
      add("<style>body {animation: marquee 10s linear infinite;position:absolute;width:100%;} @keyframes marquee {0% {left: 100%;} 100% {left: -100%;}}</style>")
    },
    function() {
      add("<style>body {animation: marquee 0.1s linear infinite;position:absolute;width:100%;} @keyframes marquee {0% {left: -0.5%;top: 0.5%;} 50% {top: 0%;left: 0.5%;} 100% {left: 0.5%;left: 0.5%;}}</style>")
    }
  ][Math.floor(Math.random() * 9)]();
}

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
  
  var date = new Date();
  if(date.getDate() == 1 && date.getMonth() == 3) {
    var rand = Math.random();
    if(rand < 0.15) {
      aprilFools();
    }
  } else {
    console.log(date);
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