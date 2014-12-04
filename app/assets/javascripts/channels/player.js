(function(){

  Player = function(){
    
    this.muted = false;
    updater = null;
    getCurrentSongTimeout = 0;
    topPlayer = this;
    this.channel_id = $('#player').data('channel-id');
    paused = false;

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;

    window.onYouTubeIframeAPIReady = function() {

      topPlayer.player = new YT.Player('video', {
        height: '100%',
        width: '100%',
        playerVars: {
          autoplay: 0,
          rel:0,
          wmode:'opaque',
          controls: 0,
          showinfo: 0,
          disablekb:1,
          iv_load_policy:3
        },
        events: {
          'onReady': topPlayer.onPlayerReady,
          'onStateChange': topPlayer.onPlayerStateChange
        }
      });
    }

    $("#volumeController").slider({
      range: "min",
      min: 0,
      max: 100,
      value: 100,
      slide: function(event,ui){
        topPlayer.player.setVolume(ui.value);
        topPlayer.player.unMute();
      }
    });
  };

  Player.prototype = {
    onPlayerReady: function(event) {
      topPlayer.getcurrentsong();
    },
    onPlayerStateChange: function(event) {
      switch(event.data)
      {
        case YT.PlayerState.ENDED:
          $("#loadnextsong").show();
          topPlayer.getcurrentsong();
        break;
        case YT.PlayerState.PAUSED:
          paused = true;
        break;
        case YT.PlayerState.PLAYING:
          //console.log("playing...");
          if(paused){
            topPlayer.getcurrentsong();
          }
          
          videoLength = topPlayer.player.getDuration();
          $("#loadnextsong").fadeOut("slow");
          window.clearInterval(updater);
          updater = setInterval(function(){
            currentTime = topPlayer.player.getCurrentTime();
            currentBarPosition = (currentTime/videoLength)*100;
            $(".bar").animate({
              width: currentBarPosition+"%"
            }, {duration:1000, queue:false});
          }, 1000);
        break;
      }
    },
    getcurrentsong: function(){
      channel_id = this.channel_id;
      (function videopolling(){
         setTimeout(function(){
            $.getJSON("/channels/"+ channel_id  +"/songs/show.json", function( data ) {
              
              if(data.error)
              {
                console.log("Error: " + data.error);
                console.log("videopooling started");
                getCurrentSongTimeout = 5000;
                videopolling();
              }
              else
              {
                //console.log(data.song.name);
                //console.log(data.song);
                //console.log(data.time);
                topPlayer.player.loadVideoById({videoId:data.song.url, startSeconds:data.time});
                $('#sent-by-user').html(data.user);
                $('#song-name').html(data.song.name);
                oQueue.update();
                getCurrentSongTimeout = 0;
                paused = false;
              }
            });
        }, getCurrentSongTimeout);
      })();
    },
    mute: function(){
      getVolume = topPlayer.player.getVolume();
      if(this.muted)
      {
        topPlayer.player.unMute();
        $('#volumeController').slider('value', getVolume);
        this.muted = false;
      }
      else
      {
        topPlayer.player.mute();
        $('#volumeController').slider('value', 0);
        this.muted = true;
      }
    }
  };

})();
