Template.postShort.helpers({
    getDate: function() {
        return getDateFromTimestamp(this.post_date);
    }
});