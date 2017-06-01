window.addEventListener("load",function(){

	// Overall view model
	function OrdersViewModel(){
		var self = this;

		self.placedOrders = [{name: "Fries", cost: 2.90}];
		self.menuItems = [
			{name: "Fries", cost: 2.90},
			{name: "Cheesesticks", cost: 5.69},
			{name: "Onion Burger", cost: 6.99}
		];
	}

	ko.applyBindings( new OrdersViewModel());
});