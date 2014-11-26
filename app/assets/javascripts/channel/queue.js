(function(){

  Queue = function(){
    
  };

  Queue.prototype = {
    addsong: function(title, author){
      var song = '<tr><td class="song-title"><h3 id="id_something">'+title+'</h3></td><td class="song-author">'+author+'</td></tr>';
      $(song).appendTo('#song-list').hide().show("slow");
    },
    deletesong: function(){

    }
  };

})();