Template.postShort.rendered = function() {
     transition(["card-short-transition"]);
}

Template.postShort.helpers({
    getDate: function() {
        return getDateFromTimestamp(this.post_date);
    },
    getId: function() {
        return this._id;
    }
});