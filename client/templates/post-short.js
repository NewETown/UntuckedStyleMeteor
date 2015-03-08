Template.postShort.rendered = function() {
    // console.log(this.data._id);
     transition(["card-short-transition"]);
//    var self = this;
//    setTimeout(function() { $('#'+self.data._id).removeClass("card-short-transition"); }, 200);
}

Template.postShort.helpers({
    getDate: function() {
        return getDateFromTimestamp(this.post_date);
    },
    getId: function() {
        return this._id;
    }
});