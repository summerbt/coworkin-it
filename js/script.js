(function () {
    var app = angular.module('gemStore', []);
    //    app.controller('StoreController', function () {
    //        this.products = gems;
    //    });
    app.controller('GalleryController', function () {
        this.current = 0;
        this.setCurrent = function (value) {
            this.current = value || 0;
        };
    });
    app.controller('PanelController', function () {
        this.tab = 1;
        this.selectTab = function (setTab) {
            this.tab = setTab;
        }
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        }
    });
    //    app.controller('ReviewController', function () {
    //
    //    });
    app.directive('store', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/store.html',
            controller: function () {
                this.products = gems;
            },
            controllerAs: 'store',
        };
    });
    app.directive('productPrice', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-price.html'
        };
    });
    app.directive('productGallery', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-gallery.html'
        };
    });
    app.directive('productNav', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-nav.html'
        };
    });
    app.directive('productDescription', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-description.html'
        };
    });
    app.directive('productSpecs', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-specs.html'
        }
    });
    app.directive('productReview', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-review.html',
            controller: function () {
                this.review = {};
                this.addReview = function (product) {
                    this.review.createdOn = Date.now();
                    product.reviews.push(this.review);
                    this.review = {};
                };
            },
            controllerAs: 'reviewCtrl',
        };
    });
    var gems = [
        {
            name: 'Pentagonal gem',
            price: 5.95,
            description: "stuff written here",
            images: [
                {
                    full: 'img/gem-01.gif',
                    thumb: 'img/gem-01-thumb.gif'
                }, {
                    full: 'img/gem-02.gif',
                    thumb: 'img/gem-02-thumb.gif'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: "Great!",
                    author: "joe@testmail.com"
                },
                {
                    stars: 1,
                    body: "Not my thing.",
                    author: "tim@testermail.com"
                }
            ],
            canPurchase: true,
        },
        {
            name: 'Dodecahedron',
            price: 2,
            description: 'wefwilksdjflskdfjsldkfsldkfj',
            images: [
                {
                    full: 'img/gem-06.gif',
                    thumb: 'img/gem-06-thumb.gif'
                },
                {
                    full: 'img/gem-08.gif',
                    thumb: 'img/gem-08-thumb.gif'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: "Great!",
                    author: "joe@testmail.com"
                },
                {
                    stars: 1,
                    body: "Not my thing.",
                    author: "tim@testermail.com"
                }
            ],
            canPurchase: true,
        }
    ];
})();
