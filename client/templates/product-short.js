Template.productShort.helpers({
    getFriendlyDate: function() {
        var date = new Date(this.expiration_date);
        return date.toLocaleDateString();
    }
});