$(document).ready(function() {

	// song = Song.new();
	// queue = Queue.new();
	oGui = new Gui();
	oTemplate = new Template();

	oTemplate.update();
  
  $(window).resize(function(){
    oTemplate.update();
  });

  document.addEventListener("fullscreenchange", function () {
    oGui.fullscreen = !oGui.fullscreen;
    oGui.swapSidebar();
  }, false);
   
  document.addEventListener("mozfullscreenchange", function () {
    oGui.fullscreen = !oGui.fullscreen;
    oGui.swapSidebar();
  }, false);
   
  document.addEventListener("webkitfullscreenchange", function () {
    oGui.fullscreen = !oGui.fullscreen;
    oGui.swapSidebar();
  }, false);

	// player.play();

	// $('#play').click( function(e){
	// 	song.play();
	// });

	// $('#pause').click( function(e){
	// 	song.pause();
	// });

	$('#fullscreen').click( function(e){
		oGui.fullScreen();
	});

	$('.swap-sidebar').click( function(e){
		oGui.swapSidebar();
	});

	// $('#mute').click( function(e){
	// 	song.mute();
	// });

	// $('#upvote').click( function(e){
	// 	song.upVote();
	// });

	// $('#downvote').click( function(e){
	// 	song.downVote();
	// });

	// $('#addSong').click( function(e){
	// 	queue.addSong(usersong);
	// });

	// $('#favorite').click( function(e){
	// 	song.favorite();
	// });

});