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
                        return this;
        },
        createVideoModel: function() {
            var videoModel = new Backbone.Model({brightcoveid: 4189256781001, ready_handler: 'introTemplateReady'});
            return videoModel;
        },

        renderVideo: function() {
            this.brightcoveView = new BrightcoveView({model: this.createVideoModel()});
            this.$el.append(this.brightcoveView.render().el);
            this.brightcoveView.activate();
        }
    });


});
