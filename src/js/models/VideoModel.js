define(
  [
    'jquery',
    'underscore',
    'backbone',
    'models/config'
  ],
  function(jQuery, _, Backbone, config){

    return Backbone.Model.extend( {
        defaults: {
            'brightcoveid': '',
            'interviewee': '',
            'isActive': false,
            'isAvailable': true,
            'videodescription': '',
            'tags': [],
            'userName': '',
            'sharelanguage': '',
            'stillimage': '',
            'hashtags': ''
        },

        initialize: function() {
            if (typeof this.attributes.tags == "string"){ 
                this.attributes.tags = this.attributes.tags.split(', ');
            }

        
            //set sharable language and urls for each model
            this.set({
                'fbShare': this.createFbShareURL(),
                'twitterShare': this.createTwitterShareURL(),
                'encodedShare': encodeURIComponent(this.get('sharelanguage')),
                'fb_id': config.fb_app_id,
                'fb_redirect': 'http://' + window.location.hostname + '/pages/interactives/fb-share/',
                'email_link': this.createEmailLink()
            });
            
            

            this.listenTo(Backbone, 'name:set', this.onUserSet);
        },

        onUserSet: function(name) {
            this.set({'userName': name})
        },

        createFbShareURL: function() {
            var videoID = this.get('video_clip');
            var baseURL = window.location.origin + window.location.pathname;
            return encodeURI(baseURL + "%23video/" + videoID); 
        },

        createTwitterShareURL: function() {
            var videoID = this.get('video_clip');
            var baseURL = window.location.origin + window.location.pathname;
            return encodeURIComponent(baseURL + "#video/" + videoID); 
        },

        createEmailLink: function(videoID) {
            return "mailto:?body=" + encodeURIComponent(this.get('sharelanguage')) +  "%0d%0d" + this.createTwitterShareURL(videoID) + "&subject=";
        }
    });

});