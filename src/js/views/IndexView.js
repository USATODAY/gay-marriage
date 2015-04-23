define(
    [
        'jquery',
        'underscore',
        'backbone',
        'views/PersonView',
        'views/ClipView',
        'templates',
        'api/analytics'
    ],
    function(jQuery, _, Backbone, PersonView, ClipView, templates, Analytics) {
        return Backbone.View.extend({
            initialize: function() {
                this.listenTo(Backbone, 'index:show', this.onIndexShow);
                this.listenTo(Backbone, 'index:hide', this.onIndexHide);
                this.listenTo(Backbone, 'person:selected', this.onPersonSelected);
                this.videoCollection = this.options.videoCollection;
            },
            render: function() {
                this.$el.html(this.template());
              
                this.renderPeople();
                this.renderClips();
  
                return this;
            },
            renderPeople: function() {
                var _this = this;

                this.collection.each(function(personModel) {
                    var personView = new PersonView({model: personModel});
                    
                    _this.$('.iapp-people-index').append(personView.render().el);
                });

                var blackHistoryUrl = this.getProjectUrl('InTheirWords');
                this.$('.iapp-people-index').append(this.otherProjectLinkTemplate({link_image: "http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/black-history-promo.png", link_url: blackHistoryUrl, link_text: "InTheirWords Black History"}));
                
                var womenHistoryUrl = this.getProjectUrl('InTheirWords-women');
                this.$('.iapp-people-index').append(this.otherProjectLinkTemplate({link_image: "http://www.gannett-cdn.com/experiments/usatoday/2015/04/gay-marriage/img/womens-history-promo.png", link_url: womenHistoryUrl, link_text: "InTheirWords Women's History"}));
            },
            renderClips: function() {
                var _this = this;
                this.videoCollection.each(function(videoModel) {
                    var clipView = new ClipView({model: videoModel});
                    _this.$('.iapp-clip-container').append(clipView.render().el);
                });

                 _.defer(function() {
                    this.$('.iapp-clip-container').isotope({
                        itemSelector: '.iapp-clip-index-item',
                        transitionDuration: 0,
                        // containerStyle: null
                        // layoutMode: 'fitRows'

                    });
                });
            },

            getProjectUrl: function(path) {
                var origin = window.location.origin;
                return origin + "/pages/interactives/" + path;
            },

            otherProjectLinkTemplate: templates["otherProjectLink.html"],

            events: {
                'click .iapp-index-back-close': 'onBackCloseClick',
                'click .iapp-index-close': 'onIndexHide'
            },
            template: templates['indextab.html'],
            className: 'iapp-panel upcoming iapp-index-panel iapp-flip-container',
            onIndexShow: function() {
                this.$el.addClass('active').removeClass('upcoming');
            },
            onIndexHide: function() {
                this.$el.removeClass('active').addClass('upcoming');

                //not sure if we should flip this back over here or not discuss
                this.$('.iapp-flip-item').removeClass('iapp-flipped');
            },
            onPersonSelected: function(personModel) {
                this.$('.iapp-flip-item').addClass('iapp-flipped');
                var personFirstName = personModel.get('first_name');
                console.log(personFirstName);
                this.filterClips(personFirstName);

            },
            onBackCloseClick: function() {
                this.$('.iapp-flip-item').removeClass('iapp-flipped');
            },
            filterClips: function(filterParam) {
                console.log("filter by " + filterParam);
                this.$('.iapp-clip-container').isotope({
                    filter: "." + filterParam
                });
            }
        });

});
