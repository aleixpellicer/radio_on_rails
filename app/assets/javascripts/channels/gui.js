(function(){

  Gui = function(){
    this.fullscreen = false;
    this.sidebarOpen = false;
  };

  Gui.prototype = {
    fullScreen: function(){
      var player = document.getElementById("player");
      if (player) {
        console.log(this.fullscreen);
        if(this.fullscreen)
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
    swapSidebar: function(click){
      videoWidth = oTemplate.videoWidth;
      sidebarWidth = oTemplate.sideBarWidth;
      defaultSidebarWidth = oTemplate.defaultSidebarWidth;


      if(this.sidebarOpen)
      {
        if(this.fullscreen==false || click)
        {
          $("#sidebar").animate({width:"0px"}, {duration:1000, easing:"easeOutQuint", complete: function() { oTemplate.update(); }}).css("overflow","visible");
          $("#video").animate({width:(videoWidth+sidebarWidth)+"px"}, {duration:1000, easing:"easeOutQuint"});
          $("#loadnextsong").animate({width:(videoWidth+sidebarWidth)+"px"}, {duration:1000, easing:"easeOutQuint"});
          $(".closePlaylistBttn").fadeOut();
          $(".openPlaylistBttn").fadeIn();
          this.sidebarOpen = false;
        }
      } else  {
        $("#sidebar").animate({width:defaultSidebarWidth+"px"}, {duration:1000, easing:"easeOutQuint", complete: function() { oTemplate.update(); }}).css("overflow","visible");
        $("#video").animate({width:(videoWidth-defaultSidebarWidth)+"px"}, {duration:1000, easing:"easeOutQuint"});
        $("#loadnextsong").animate({width:(videoWidth-defaultSidebarWidth)+"px"}, {duration:1000, easing:"easeOutQuint"});
        $(".closePlaylistBttn").fadeIn();
        $(".openPlaylistBttn").fadeOut();
        this.sidebarOpen = true;
      }
      
    }
  };

})();