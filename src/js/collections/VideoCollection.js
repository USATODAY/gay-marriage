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
            var _this = this;

            this.each(function(model) {
                var modelTags = model.get('tags');
                var isAvailable = _this.arrContains(filterArray, modelTags);

                if (isAvailable) {
                    model.set({'isAvailable': true});
                } else {
                    model.set({'isAvailable': false});
                }
            });

            //cache a copy of filtered vids
            this._availableVids = this.where({'isAvailable': true});
            console.log(this._availableVids);

        },
        pickVideo: function() {
            var randomIndex = Math.floor(Math.random() * this._availableVids.length);
            return this._availableVids[randomIndex];
        },

        arrContains: function(array1, array2) {
            // var diff = _.difference(array1, array2);
            // if (diff.length === 0) {
                // return true;
            // } else {
                // return false;
            // }
            
            var intersection = _.intersection(array1, array2);
            if (intersection.length > 0) {
                return true;
            } else  {
                return false;
            }
        }
        
    });

});
