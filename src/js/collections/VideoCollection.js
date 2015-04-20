define(
  [
    'jquery',
    'underscore',
    'backbone',
    'models/VideoModel'
  ], function(jQuery, _, Backbone, VideoModel){

    return Backbone.Collection.extend({
        initialize: function() {
           
            this.listenTo(Backbone, 'filters:update', this.onFilterUpdate);
            availableTags = [];
            
        },
        model: VideoModel,
        onFilterUpdate: function(filterArray) {
           this.filterByTagArray(filterArray);
           var availableTags = this.getAvailableTags();
           Backbone.trigger("videos:filtered", availableTags);
        },

        getAvailableTags: function() {
            availableTags = [];

            _.each(this._availableVids, function(model) {
                availableTags = _.union(availableTags, model.get('tags'));
            });
            return availableTags;
        },
        filterByTagArray: function(filterArray) {
            function arrContains(array1, array2) {
                var diff = _.difference(array1, array2);
                if (diff.length === 0) {
                    return true;
                } else {
                    return false;
                }
            }

            this.each(function(model) {
                var modelTags = model.get('tags');
                var isAvailable = arrContains(filterArray, modelTags);

                if (isAvailable) {
                    model.set({'isAvailable': true});
                } else {
                    model.set({'isAvailable': false});
                }
            });

            //cache a copy of filtered vids
            this._availableVids = this.where({'isAvailable': true});

        },
        pickVideo: function() {
            var randomIndex = Math.floor(Math.random() * this._availableVids.length);
            return this._availableVids[randomIndex];
        }
        
    });

});