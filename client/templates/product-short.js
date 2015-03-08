Template.productShort.helpers({
    getFriendlyDate: function() {
        return getDateFromTimestamp(this.expiration_date);
    }
});