(function(){

  Template = function(){
    this.defaultSidebarWidth = 400;
  };

  Template.prototype = {
    update: function(){
      this.sideBarWidth = $('#sidebar').width();
      this.videoWidth = $('body').width()-this.sideBarWidth;
      this.bodyHeight = $('body').height()-300;

      this.setQueueHeight();
      this.setVideoWidth();
      this.setLoadingWidth();
    },
    setQueueHeight: function(){
      $('#queue').height(this.bodyHeight-40);
    },
    setVideoWidth: function(){
      $('#video').width(this.videoWidth+"px");
    },
    setLoadingWidth: function(){
      $('#loading').width(this.videoWidth+"px");
    }
  };

})();