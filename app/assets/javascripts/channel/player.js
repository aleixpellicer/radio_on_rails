
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
      height: '100%',
      width: '100%',
      videoId: 'IPBmNNWvUiQ',
      playerVars: {
      	autoplay: 1,
        rel:0,
        wmode:'opaque',
        controls: 0,
        showinfo: 0,
        disablekb:1,
        iv_load_policy:3
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  updater = null;
  function onPlayerStateChange(event) {
    // if (event.data == YT.PlayerState.PLAYING && !done) {
    //   setTimeout(stopVideo, 6000);
    //   done = true;
    // }
    switch(event.data)
    {
      case YT.PlayerState.ENDED:
        $("#loadnextsong").show();
      break;
      case YT.PlayerState.CUED:
        
      break;
      case YT.PlayerState.PLAYING:
        videoLength = player.getDuration();
        $("#loadnextsong").fadeOut("slow");
        window.clearInterval(updater);
        updater = setInterval(function(){
          currentTime = player.getCurrentTime();
          currentBarPosition = (currentTime/videoLength)*100;
          $(".bar").animate({
            width: currentBarPosition+"%"
          }, {duration:1000, queue:false});
        }, 1000);
      break;
    }
  }

  function stopVideo() {
    player.stopVideo();
  }
