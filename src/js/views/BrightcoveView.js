define(
  [
    'jquery',
    'underscore',
    'backbone',
    'dataManager',
    'templates'
  ],
  function(jQuery, _, Backbone, dataManager, templates){
        return Backbone.View.extend({
            initialize: function() {
              this.listenTo(Backbone, "window:resize", this.reformatVideos);
              this.listenTo(Backbone, "video:ready", this.onVideoReady);
              this.listenTo(Backbone, "video:ended", this.onVideoEnded);

            },
            template: templates['brightcove.html'],
            className: 'iapp-brightcove-wrap',
            render: function() {

              
              //currently hard coding video_id until i get video collections/models up and running
              this.$el.html(this.template(this.model.toJSON()));
              // this.reformatVideos();
              return this;
            },
            activate: function() {
              console.log("activate");
              brightcove.createExperiences();
              // this.reformatVideos();
            },
            reformatVideos: function() {
                console.log("reformat Videos");
                var numWindowWidth = window.innerWidth;
                if (window.innerWidth / window.innerHeight < 1920 / 1080) {
                  var numWidth = 100 * ((1920 / 1080) / (window.innerWidth / window.innerHeight));

                  this.$el.css({"top": "0%", "left" : ((100 - numWidth) / 2).toString() + "%", "width": numWidth.toString() + "%", "height": "100%"});
                  if(this.bcExperience !== undefined) {

                    if (this.bcExperience.experience.type == "html") {
                      console.log("num width: " + numWidth);
                      //convert percent to pixels
                      var fullWidth = numWidth/100 * window.innerWidth;
                      var fullHeight = window.innerHeight;
                      this.bcExperience.setSize(fullWidth, fullHeight)
                    } 

                  } else {
                    console.log(undefined);
                  }

                } else {
                  var numHeight = 100 * ((1080/ 1920) / (window.innerHeight/window.innerWidth));
                  this.$el.css({"left" : "0%"});
                  this.$el.css({"top" : ((100 - numHeight) / 2).toString() + "%", "height": numHeight.toString() + "%", "width": "100%"});

                   if(this.bcExperience !== undefined) {

                     if (this.bcExperience.experience.type == "html") {
                      //convert percent to pixels
                      var fullHeight = numHeight/100 * window.innerHeight;
                      var fullWidth = window.innerWidth;

                   
                      this.bcExperience.setSize(fullWidth, fullHeight);
                    }
                    
                  } else {
                    console.log(undefined);
                  }
                }


            
            },
            onVideoReady: function(bcObj) {
              console.log(this);
              
              console.log("video ready");
              this.bcPlayer = bcObj.player;

              this.pauseVideo();
              this.bcExperience = bcObj.experience;
              console.log(this.bcPlayer);
              // this.setVideo "4027676240001");
              this.reformatVideos();
              // $(window).trigger("resize");
            },

            pauseVideo: function() {
              this.bcPlayer.pause();
            },

            playVideo: function() {
              this.bcPlayer.play();
            },

            setVideo: function(bcId) {
              // console.log(this.bcPlayer);
              this.bcPlayer.loadVideoByID(bcId);
            },

            onVideoEnded: function(bcObj) {
              // console.log(bcObj.experience);
              // bcObj.experience.unload();
              // console.log("remove");
              // this.remove();
            } 
        });
});