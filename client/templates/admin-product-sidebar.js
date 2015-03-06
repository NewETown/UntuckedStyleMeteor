Template.adminProductSidebar.rendered = function() {
}

Template.adminProductSidebar.events({
    'click .load-product': function() {
        var product = this;
        var _d = new Date(product.expiration_date);
        window._PRODUCT_ID = product._id;
        $('#product-name').val(product.name);
        $('#expiration-date').val(_d.toLocaleDateString());
        $('#product-url').val(product.url);
        $('#product-price').val(product.price);
        $('#product-image').focusin().val(product.image_url).focusout();
        $('#product-short').val(product.short);
        var tag_containers = $('.tag');
        tag_containers.each(function(i) {$(this).val(product.tags[i]);});
    }
});

Template.adminProductSidebar.helpers({
    products: function() {
        return Products.find({expiration_date: {$gt: Date.now()}}, {sort: {expiration_date: -1}});
    }
});

// https://touchofmodern.insnw.net/products/000/187/846/700c6806a28491ea8281912ed5df8e4c_large.jpg