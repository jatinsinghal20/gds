require(['./lightgallery.js'], function() {
  require(["./lg-zoom.js", "./lg-thumbnail.js"], function(){
    lightGallery(document.getElementById('lightgallery'));
  });
});

document.onload(console.log("HEy"));
