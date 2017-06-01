window.addEventListener("load",function(){

	// Overall view model
	function OrdersViewModel(){
		var self = this;

		// Non-editable data
		self.menuItems = [
			{name: "Fries", cost: 2.90},
			{name: "Cheesesticks", cost: 5.69},
			{name: "Onion Burger", cost: 6.99}
		];

		// Editable data
		self.placedOrders = ko.observableArray([
			new Order( self.menuItems[0] )
		]);

		self.orderTotal = ko.computed(function(){
			var total = 0;
			for (var i = 0; i < self.placedOrders().length; i++){
				total += self.placedOrders()[i].item().cost;
			}
			return total.toFixed(2);
		});

		// Operations
		self.addItem = function(){
			self.placedOrders.push( new Order( self.menuItems[0] ));
		};

		self.removeItem = function( placedOrder ){
			self.placedOrders.remove( placedOrder );
		}
	}

	// Represents a row in the table
	function Order( orderItem ){
		var self = this;
		self.item = ko.observable( orderItem );

		self.formattedPrice = ko.computed(function() {
		    var cost = self.item().cost;
		    return cost ? "$" + cost.toFixed(2) : "None";        
		}); 
	}

	ko.applyBindings( new OrdersViewModel());
});