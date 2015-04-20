define(
    [
        'require',
        'jquery',
        'underscore',
        'backbone',
        'isotope',
        'dataManager',
        'views/AppView',
        'templates'
    ],
    function(require, jQuery, _, Backbone, Isotope, dataManager, AppView, templates) {
        return {
            init: function() {

                require(['jquery-bridget/jquery.bridget'],
                    function() {
                        // make Isotope a jQuery plugin
                        jQuery.bridget('isotope', Isotope);

                        //remove page header
                        $('header').fadeOut();

                        //Initialize main appView
                        var appView = new AppView({
                            el: ".iapp-wrap"
                        });

                        //Make data request
                        dataManager.getData();

                        jQuery(window).resize(function() {
                            Backbone.trigger("window:resize");
                        });

                        if(window.Modernizr !== undefined && window.innerWidth <=1100) {
                            if (Modernizr.touch) {
                                $('.iapp-wrap').addClass('tablet');
                            }
                        }

                        //set global callback for Brightcove videos to use
                        window.onTemplateReady = function(evt) {
                            console.log("video ready handler window");
                            var APIModules = brightcove.api.modules.APIModules;
                            var player = brightcove.api.getExperience(evt.target.experience.id);
                            var videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);
                            var experience = player.getModule(APIModules.EXPERIENCE);



                            Backbone.trigger("video:ready", {
                                player: videoPlayer,
                                experience: experience
                            });

                            //trigger Backbone event and pass object with Brightcove player and experience objects as arguments
                            videoPlayer.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, function(e) {
                                Backbone.trigger("video:ended", {
                                    player: videoPlayer,
                                    experience: experience
                                });
                            });
                        };
                    });


            }
        };
    });