/* global angular */
(function() {
	var app = angular.module('carStore', ['store-directives']);
	app.controller('GalleryController', function() {
		this.imageIndex = 0;
		this.setCurrent = function(imageNumber) {
			console.log(imageNumber);
			this.imageIndex = imageNumber || 0;
		};
	});
	app.controller('StoreController', function() {
		this.products = car;
	});
	app.controller("ReviewController", function() {
		this.review = {};
		this.addReview = function(product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});
	var car = [{
		name: 'Mid Size',
		description: "Some cars have hidden qualities beyond their durability, beyond their speed. These are not those.. our midsize line contains our average cars.",
		shine: 5,
		price: 110.50,
		rarity: 6,
		color: '#CCC',
		faces: 7,
		available: 4,
		rented: 1,
		canRent: true,
		images: ["http://p.globalsources.com/IMAGES/PDT/S1131752529/Sunroof-5-AMT-Large-Sedan-and-Sedan-Production-Line-Equipment-Supply.jpg", "https://www.rcgauto.com/wp-content/uploads/2017/10/2017-Honda-Accord-Sedan-180x180.png", "https://www.tunerzstore.com/image/cache/data/q70-spoiler-180x180.jpg"],
		reviews: [{
			stars: 5,
			body: "I love this gem!",
			author: "joe@thomas.com",
			createdOn: 1397490980837
		}, {
			stars: 1,
			body: "This gem sucks.",
			author: "tim@hater.com",
			createdOn: 1397490980837
		}]
	}, {
		name: 'Mini',
		description: "Origin of many of these cars is unknown, hence their low rental price. They showcase very low speed, accel and durability - but it sure beats walking",
		shine: 1,
		price: 22.90,
		rarity: 2,
		color: '#EEE',
		faces: 3,
		available: 4,
		rented: 1,
		canRent: true,
		images: ["http://motorblock.at/wp-content/uploads/2016/07/Mercedes-Golf-180x180.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/kRNCayFags8Dz63AzR6hfA/180s.jpg", "http://p.globalsources.com/IMAGES/PDT/S1144503069/100-electric-car-available-for-both-CBU-importing-and-local-SKD-assembly.jpg", ],
		reviews: [{
			stars: 3,
			body: "I think this gem was just OK, could honestly use more shine, IMO.",
			author: "JimmyDean@sausage.com",
			createdOn: 1397490980837
		}, {
			stars: 4,
			body: "Any gem with 12 faces is for me!",
			author: "carRock@alyssaNicoll.com",
			createdOn: 1397490980837
		}]
	}, {
		name: 'Luxury',
		description: "Our luxury line includes only our most coveted and sought after cars. You will pay a pretty penny to be able to rent these gorgeous, high speed, accel, and durability cars.",
		shine: 9,
		price: 1100,
		rarity: 8,
		color: '#000',
		faces: 7,
		available: 4,
		rented: 1,
		canRent: true,
		images: ["http://cdn2.autoexpress.co.uk/sites/autoexpressuk/files/styles/square_thumbnail/public/9/52//lykan_frontstatic.jpg?itok=HXjhAwH7", "https://s3-us-west-2.amazonaws.com/hispotion-prod/wp-content/uploads/2014/05/KOENIGSEGG-ONE-1-2-180x180.jpg", "https://s3-us-west-2.amazonaws.com/hispotion-prod/wp-content/uploads/2014/05/Marussia-B2-2-180x180.jpeg"],
		reviews: [{
			stars: 1,
			body: "This gem is WAY too expensive for its rarity value.",
			author: "turtleguyy@zdn.me",
			createdOn: 1397490980837
		}, {
			stars: 1,
			body: "BBW: High Shine != High Quality.",
			author: "LouisW407@gmail.com",
			createdOn: 1397490980837
		}, {
			stars: 1,
			body: "Don't waste your rubles!",
			author: "nat@flatland.com",
			createdOn: 1397490980837
		}]
	}];
})();