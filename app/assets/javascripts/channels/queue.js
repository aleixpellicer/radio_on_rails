(function(){

  Queue = function(){
    addedSongs = 0;
    deletedSongs = 0;
    queueTimeout = null;
    this.update();
  };

  Queue.prototype = {
    addsong: function(id, title, author){
      addedSongs++;
      var deferreds = new Array();
      var deferred = jQuery.Deferred();
      deferreds.push(deferred);
      var song = '<tr id="song-'+id+'" data-id="'+id+'" class="song"><td class="song-title"><h3>'+title+'</h3></td><td class="song-author">'+author+'</td></tr>';
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
    update: function(){
      thisQueue = this;
      queueTimeoutTime = 0;
      (function queuePolling(){
        clearTimeout(queueTimeout);
        queueTimeout = setTimeout(function(){
          $.getJSON("/channels/"+ oPlayer.channel_id  +"/queue.json", function( data ) {
            if(data.error)
            {
              console.log("Error: " + data.error);
            }
            else
            {
              //console.log(data);
              $('.song').addClass("setForDeleting");

              //var deferreds = new Array();

              $.each(data.songs, function(key, song){
                //console.log(song.name);
                exists = false;
                $('.song').each( function(i){
                  //debugger;
                  if(song.id == $(this).data("id"))
                  {
                    exists = true;
                    tr = this;
                  }
                });

                if(exists){
                  $(tr).removeClass("setForDeleting");
                  console.log('removing class');
                }
                else
                {
                  thisQueue.addsong(song.id, song.name, song.user_id);
                }
              });

              console.log('starting to delete');
              $('.setForDeleting').each( function(i){
                thisQueue.deletesong($(this).data("id"));
              });

            }
            queueTimeoutTime = 10000;
            queuePolling();
          });
        }, queueTimeoutTime);
      })();
    }
  };

})();