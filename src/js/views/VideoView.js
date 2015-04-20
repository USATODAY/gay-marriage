define(
  [
    'jquery',
    'underscore',
    'lib/BackboneRouter',
    'views/BrightcoveView',
    'views/ShareView',
    'views/CreditView',
    'models/CreditsModel',
    'models/config',
    'router',
    'templates',
    'api/analytics'
  ],
  function(jQuery, _, Backbone, BrightcoveView, ShareView, CreditsView, CreditsModel, config, router, templates, Analytics) {

    return Backbone.View.extend({
        initialize: function() {
           this.listenTo(Backbone, "render:video", this.renderVideo); 
           this.listenTo(Backbone, "video:ready", this.onVideoReady);
           this.listenTo(Backbone, "video:ended", this.onVideoEnded);
           this.listenTo(Backbone, "get:video", this.onGetVideo);
           this.listenTo(Backbone, "update:video", this.updateView);
           this.listenTo(Backbone, "share:close", this.onShareClose);
           this.listenTo(Backbone, "tags:set", this.onTagsSet);
           // this.collection.getAvailableTags();
           
        },
        events: {
            'click .iapp-video-more-button': 'onMoreClick',
            'click .iapp-video-discuss-button': 'onShareClick',
            'click .iapp-video-credits-button': 'onCreditsClick',
            'click .iapp-video-replay-button': 'onReplayClick',
            'click .iapp-video-play-button': 'onPlayClick',
            'click .iapp-video-topics-button': 'onTopicsClick',
            'click .iapp-video-back-button': 'onTopicsClick'
        },
        className: 'iapp-panel iapp-video-panel upcoming',
        template: templates['video.html'],
        render: function(videoModel) {
            // console.log(this.collection);
            if (videoModel != undefined) {
                this.selectedVideoModel = videoModel;
            } 
            
            this.$el.html(this.template(this.selectedVideoModel.toJSON()));

            this.addShare();
            this.addCredits();

            
            return this;
        },
        renderVideo: function() {
            //get random video based on sellected tags from the collection
            // var selectedVideoModel = this.collection.pickVideo()
            
            router.navigate('video/' + this.selectedVideoModel.get('video_clip'));

            this.brightcoveView = new BrightcoveView({model: this.selectedVideoModel});
            this.$el.append(this.brightcoveView.render().el);
            this.brightcoveView.activate();

            // console.log(brightcoveView);
            var currentVideo = this.collection.find(function(video) {
                video.isActive == true;
            });

            
        },
        onMoreClick: function() {
            Analytics.trackEvent("More videos button clicked");
            Backbone.trigger('index:show');
        },
        onCreditsClick: function() {
            Backbone.trigger('credits:show');
        },        
        onTagsSet: function() {
            this.selectedVideoModel = this.collection.pickVideo();
            Backbone.trigger('video:set', this.selectedVideoModel);
        },
        onReplayClick: function() {
            Analytics.trackEvent("Video replay button clicked");
            Backbone.trigger('index:hide');
            this.brightcoveView.bcPlayer.getIsPlaying(cb);
            var _this = this;
            function cb(result) {
                if (result) {
                    _this.brightcoveView.bcPlayer.seek(0);
                    
                } else {
                     _this.brightcoveView.bcPlayer.seek(0);
                    _this.brightcoveView.playVideo();
                    
                }
            }
            
        },
        onPlayClick: function() {
            Analytics.trackEvent("Video play/pause button clicked");
            this.brightcoveView.bcPlayer.getIsPlaying(cb);
            var _this = this;
            function cb(result) {
                if (result) {
                    _this.brightcoveView.pauseVideo();
                    _this.$('.iapp-video-play-button').find('.iapp-button-text').text("Play");
                } else {
                    _this.brightcoveView.playVideo();
                    _this.$('.iapp-video-play-button').find('.iapp-button-text').text("Pause");
                }
            }
        },
        onTopicsClick: function() {
            this.brightcoveView.pauseVideo();
            Backbone.trigger('index:hide');
            Backbone.trigger('app:goBack');
            Backbone.trigger('tags:reset');
        },
        updateView: function(newVideoModel) {



            this.selectedVideoModel = newVideoModel;
            router.navigate('video/' + this.selectedVideoModel.get('video_clip'));


            var newData = newVideoModel.toJSON();



            this.brightcoveView.setVideo(this.selectedVideoModel.get('brightcoveid'));
            this.addShare();


            //add dom updating for other video info

            this.$('.iapp-video-greeting').html(newData.userName + ' ' + newData.intro);

            this.$('.iapp-video-description').html(newData.videodescription);
        },
        onGetVideo: function() {
            //get random video based on sellected tags from the collection
            // this.selectedVideoModel = this.collection.pickVideo()
            // this.renderVideo();
        },
        onShareClick: function() {
            Analytics.trackEvent('Video share button clicked');
            this.brightcoveView.$el.addClass('iapp-blur');
            this.$('.iapp-video-info').addClass('iapp-blur');
            $('.iapp-header').addClass('iapp-blur');
            $('.iapp-index-panel').addClass('iapp-blur');

            this.shareView.$el.addClass('active').removeClass('upcoming');
            this.brightcoveView.pauseVideo();
            // $('.iapp-wrap').addClass('iapp-blur');
        },
        addShare: function() {

            if (this.shareView == undefined) {
                this.shareView = new ShareView({model:  this.selectedVideoModel});
                $('.iapp-wrap').append(this.shareView.render().el);
            } else {
                this.shareView.remove();
                this.shareView = new ShareView({model:  this.selectedVideoModel});
                $('.iapp-wrap').append(this.shareView.render().el);
            }
            
        },
        onShareClose: function() {
            this.brightcoveView.$el.removeClass('iapp-blur');
            this.$('.iapp-video-info').removeClass('iapp-blur');
            $('.iapp-header').removeClass('iapp-blur');
             $('.iapp-index-panel').removeClass('iapp-blur');
        },
        addCredits: function() {
            if (this.creditsView == undefined) {
                 this.creditsView = new CreditsView({model: new CreditsModel()});
                $('.iapp-wrap').append(this.creditsView.render().el);
            }
           
        },
        onVideoEnded: function() {
            Analytics.trackEvent("Video finished");
            if (!config.isMobile) {
                Backbone.trigger('index:show');
            }
            
            // this.onTopicsClick();
        }
    });


});
