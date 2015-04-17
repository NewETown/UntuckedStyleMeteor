Template.adminProductSidebar.rendered = function() {
}

Template.adminProductSidebar.events({
    'click .load-product': function() {
        var product = this;
        var _d = new Date(product.expiration_date);
        window._PRODUCT = product;
        $('#product-name').val(product.name);
        $('#expiration-date').val(_d.toLocaleDateString());
        $('#product-url').val(product.url);
        $('#product-price').val(product.price);
        $('#product-image').focusin().val(product.image_url).focusout();
        $('#product-short').val(product.short);
        $('#product-category').val(product.category ? product.category.toUpperCase() : 'PICK ONE');
        var tag_containers = $('.tag');
        tag_containers.each(function(i) {$(this).val(product.tags[i]);});
        
        $('.invalid-field').removeClass('invalid-field');
        $('.error').each(function() { $(this).css('display', 'none'); });
        
        $('#delete').prop('disabled',false);
    }
});

Template.adminProductSidebar.helpers({
    products: function() {
        var products = Products.find({}, {sort: {expiration_date: -1}});
        return products;
    }
});