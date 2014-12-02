(function(){

  Queue = function(){
    addedSongs = 0;
    deletedSongs = 0;
  };

  Queue.prototype = {
    addsong: function(id, title, author){
      addedSongs++;
      var deferreds = new Array();
      var deferred = jQuery.Deferred();
      deferreds.push(deferred);
      var song = '<tr id="song-'+id+'"><td class="song-title"><h3 id="id_something">'+title+'</h3></td><td class="song-author">'+author+'</td></tr>';
      $(song).appendTo('#song-list').hide().delay(addedSongs*500).show("slow", function(){ deferred.resolve(); });

      jQuery.when.apply(jQuery, deferreds).done(function(){
        addedSongs = 0;
      });
    },
    deletesong: function(id){
      deletedSongs++;
      var deferreds = new Array();
      var deferred = jQuery.Deferred();
      deferreds.push(deferred);

      $('#song-'+id).delay(deletedSongs*500).hide("slow", function(){ deferred.resolve(); this.remove(); });

      jQuery.when.apply(jQuery, deferreds).done(function(){
        deletedSongs = 0;
      });
    },
    update: function(channel){
      $.getJSON("/channels/"+ oPlayer.channel_id +"/queue.json", function( data ) {
        
        if(data.error)
        {
          console.log("yes" + data.error);
        }
        else
        {
          console.log(data.song);
          topPlayer.player.loadVideoById({videoId:data.song.url, startSeconds:data.time});
          $('#sent-by-user').html();
          $('#song-name').html(data.song.name);
          paused = false;
        }

      });
    }
  };

})();