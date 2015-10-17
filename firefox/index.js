var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.canterbury.ac.nz",
  contentScriptFile: [
    data.url("domready.js"),
    data.url("content.js")
  ],
  contentScriptWhen: "start",
  contentStyleFile: data.url("content.css")
});