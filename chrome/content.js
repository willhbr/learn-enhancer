DomReady.ready(() => {
  var thing = document.getElementById("resourceobject");
  if(thing != null) {
    return window.location.replace(thing.data);
  } else {
    var frame = document.getElementById("cleanSlate");
    if(frame != null) {
      return window.location.replace(frame.src);
    }
  }
  
  var date = new Date();
  if (date.getDate() == 1 && date.getMonth() == 3) {
    var rand = Math.random();
    if(rand < 0.15) {
      aprilFools();
    }
  }

  //Delete menu items
  document.getElementsByClassName('block_menu_site_and_course')[0].remove();
  document.getElementsByClassName('block_site_main_menu')[0].remove();
  
  //Delete  courses, identified by title attribute in the <a> node (Use 'Inspect' tool to find this easily)
  var titles = ['COSC420S1', 'COSC261S1', 'SENG302', 'SENG401', 'COSC428S1']; // TODO Can't get the following to work: 'CSSE PG', 'CSSE Notices', 'Engineering Work Experience'];
  titles.forEach( function(title) {
    var query = '[title="' + title + '"]';
    var node = document.querySelector(query);
    if (node !== null) {
      node.parentNode.parentNode.remove(); // Delete containing <li>
    }
  });


  // Auto-login part 1 
  var loginbtn = document.getElementsByClassName('ucloginbtn')[0];
  if (loginbtn !== undefined) {
    loginbtn.click();
  }
  
  // Auto-login part 2 with credential auto-fill
  var loginbtn = document.querySelector('#login > div:nth-child(2) > section > button');
  if (loginbtn !== null) {
    new Promise(resolve => setTimeout(function() {}, 2000));
    loginbtn.click();
  }

  // Lol, James..
  if(document.URL.indexOf("blackboard.vuw.ac.nz/") != -1) {
    var nameLink = document.getElementById("global-nav-link");
    var oldHTML = nameLink.innerHTML;
    nameLink.innerHTML = oldHTML.replace("James Wright", '"Will is Awesome!" - James Wright');
  } else {
    var main = document.getElementById('region-main');
    if (!main) {
      return;
    }
    main.className = "span9 pull-right";
    var side = document.getElementById('block-region-side-pre');
    side.className = "span3 desktop-first-column decaf-border decaf-border-right block-region";
  }
});
