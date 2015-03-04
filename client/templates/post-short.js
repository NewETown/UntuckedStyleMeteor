Template.postShort.rendered = function() {
    transition(["card-post-short-transition"]);
}

Template.postShort.helpers({
    getDate: function() {
        return getDateFromTimestamp(this.post_date);
    }
});