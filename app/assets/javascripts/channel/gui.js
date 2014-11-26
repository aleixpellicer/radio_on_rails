(function(){

  Gui = function(){
    fullscreen = false;
    sidebarOpen = true;
  };

  Gui.prototype = {
    fullScreen: function(){
      var player = document.getElementById("player");
      if (player) {
        console.log(fullscreen);
        if(fullscreen)
        {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
          else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          }
          else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        }
        else
        {
          if (player.requestFullscreen) {
            player.requestFullscreen();
          }
          else if (player.mozRequestFullScreen) {
            player.mozRequestFullScreen();
          }
          else if (player.webkitRequestFullScreen) {
            player.webkitRequestFullScreen();
          }
        }
      }
    },
    swapSidebar: function(){
      videoWidth = oTemplate.videoWidth;
      sidebarWidth = oTemplate.sideBarWidth;
      defaultSidebarWidth = oTemplate.defaultSidebarWidth;

      if(sidebarOpen)
      {
        $("#sidebar").animate({width:"0px"}, {duration:1000, easing:"easeOutQuint", complete: function() { oTemplate.update(); }}).css("overflow","visible");
        $("#video").animate({width:(videoWidth+sidebarWidth)+"px"}, {duration:1000, easing:"easeOutQuint"});
        $("#loading").animate({width:(videoWidth+sidebarWidth)+"px"}, {duration:1000, easing:"easeOutQuint"});
        $(".closePlaylistBttn").fadeOut();
        $(".openPlaylistBttn").fadeIn();
        sidebarOpen = false;
      } else  {
        $("#sidebar").animate({width:defaultSidebarWidth+"px"}, {duration:1000, easing:"easeOutQuint", complete: function() { oTemplate.update(); }}).css("overflow","visible");
        $("#video").animate({width:(videoWidth-defaultSidebarWidth)+"px"}, {duration:1000, easing:"easeOutQuint"});
        $("#loading").animate({width:(videoWidth-defaultSidebarWidth)+"px"}, {duration:1000, easing:"easeOutQuint"});
        $(".closePlaylistBttn").fadeIn();
        $(".openPlaylistBttn").fadeOut();
        sidebarOpen = true;
      }
      
    }
  };

})();