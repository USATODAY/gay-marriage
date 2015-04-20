define(
    [
        'jquery',
        'underscore',
        'backbone'
    ],
    function(jQuery, _, Backbone){

        return Backbone.Model.extend( {
            defaults: {
                'person_name': '',
                'person_bio': '',
                'person_still': '' 
            },

            initialize: function() {
                
            }
    });

});