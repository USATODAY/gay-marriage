define([], function() {
    return {
        cleanTag: function(string) {
            return name.trim().replace(/\s/g, "-").toLowerCase();
        }
    };
});
