Template.postShort.rendered = function() {
     transition(["card-short-transition"]);
}

Template.postShort.helpers({
    getDate: function() {
        return getDateFromTimestamp(this.post_date);
    },
    getId: function() {
        return this._id;
    },
    getCapitalizedCategory: function() {
        var cat = this.category;
        return cat.charAt(0).toUpperCase() + cat.slice(1);
    }
});