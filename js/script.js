(function () {
    var app = angular.module('gemStore', []);
    app.controller('StoreController', function () {
        this.products = gems;
    });
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
