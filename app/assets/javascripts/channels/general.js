$(document).ready(function() {

	oGui = new Gui();
	oTemplate = new Template();
	oQueue = new Queue();
  oPlayer = new Player();

	oTemplate.update();
  
  $(window).resize(function(){
    oTemplate.update();
  });

  document.addEventListener("fullscreenchange", function () {
    oGui.swapSidebar();
    oGui.fullscreen = !oGui.fullscreen;
  }, false);
   
  document.addEventListener("mozfullscreenchange", function () {
    oGui.swapSidebar();
    oGui.fullscreen = !oGui.fullscreen;
  }, false);
   
  document.addEventListener("webkitfullscreenchange", function () {
    oGui.swapSidebar();
    oGui.fullscreen = !oGui.fullscreen;
  }, false);

  $("#new_song").on("ajax:beforeSend", function() {
  	$(".song-input").val('');
  });

  setTimeout(function() {
  	$('#loading').fadeOut("slow");
    oGui.swapSidebar();
  }, 3000);

	$('#fullscreen').click( function(e){
		oGui.fullScreen();
	});

	$('.swap-sidebar').click( function(e){
		oGui.swapSidebar(true);
	});

  $('#mute').click( function(e){
    oPlayer.mute();
  });

});