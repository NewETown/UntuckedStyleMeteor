Template.productShort.rendered = function() {
    transition(["card-short-transition"]);
}

Template.productShort.helpers({
    getFriendlyDate: function() {
        return getDateFromTimestamp(this.expiration_date);
    }
});