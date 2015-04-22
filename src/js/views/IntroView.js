define(
  [
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/BrightcoveView'
  ],
  function(jQuery, _, Backbone, templates, BrightcoveView) {
    return Backbone.View.extend({
        initialize: function() {
            
        },
        className: 'iapp-panel active',
        template: templates['intro.html'],
        render: function(data) {
            
            this.$el.html(this.template({head: data.project_head, chatter: data.intro_text}));
            this.renderVideo();
            return this;
        },
        createVideoModel: function() {
            var videoModel = new Backbone.Model({brightcoveid: 4189256781001, ready_handler: 'introTemplateReady'});
            return videoModel;
        },

        videoTemplate: templates["IntroVideo.html"],

        renderVideo: function() {
            this.$el.append(this.videoTemplate({ video_name: "intro_bg" }));
        }
    });


});
