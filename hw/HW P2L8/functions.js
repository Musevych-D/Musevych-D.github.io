function Shop(){
	this.checkAvailability = function(){
		(this.quantity > 0) ? this.isAvailable = true : this.isAvailable = false;
		if(this.isAvailable == false){
			document.getElementsByClassName(this.type + this.model + 'btn')[0].disabled = true;
		}
		return 'isProductAvailable: ' + this.isAvailable;
	}
}

//Хранитель методов для детей
function Good(){
	Shop.call(this);


	//Public properties of the object (may be read/written from outside the object.)
	this.isAvailable = false;
	this.onSale = false;
	this.model = '';
	this.price = '';
	this.color = '';
	this.quantity = 0;
	this.type = 'Good';

	//private variable (It stores current "this"). Can only be accessed by private functions and privileged methods
	var that = this;

	//privileged (public) methods (may be invoked by code external to the object.)
	this.describeItem = function(){
		alert(this.type + ' description:\n\n' + 
			  'Model is: ' + this.model + '\n' + 
			  'Color is: ' + this.color + '\n' + 
			  'Price is: ' + this.price + '\n' + 
			  'We have ' + this.quantity + ' left\n' + 
			  'Is it Pink: ' + isPink());
	}
	
	this.sellSomeItems = function(){
		calculateSoldProducts();
	}
	
	this.setOnSale = function(){
		if(this.onSale == false){
			this.onSale = true;
			var priceOnSale;
			priceOnSale = this.price * 0.8;
			this.price = priceOnSale;
			document.getElementsByClassName(that.type + that.model + 'prc')[0].innerHTML = 'Price: ' + this.price;
			alert('Here you go! A 20% discount for this product!')
		}
	}

	//Private methods (can't be accessed from the outside, only inside functions)
	//Обычное описание приватного метода
	function calculateSoldProducts(){
		var quantity = +prompt( 'How many of these?');
		if(that.quantity - quantity >= 0){
			var price = quantity * that.price;
			that.quantity -= quantity;
			alert('We\'ve sold ' + quantity + ' ' + that.model + '(s)\n' +
			'We have ' + that.quantity + ' left\n' +
			'Total worth: ' + that.quantity * that.price);
			document.getElementsByClassName(that.type + that.model)[0].innerHTML = 'Quantity: ' + that.quantity;
			if(that.quantity == 0){
				document.getElementsByClassName(that.type + that.model + 'btn')[0].disabled = true;
				that.callJohny();
			}
		}else{
			alert('Not enough products left')
		}
	}
	function isPink(){
		var isPink = '';
		that.color == 'pink' ? isPink = true : isPink = false;
		return isPink; 
	}

}

//Нижний уровень обьектов, наследует методы и свойства от Good и методы от Shop
function Laptop(){
	//Установка this путём наследования контекста из вызова функции Good
	Good.call(this);
	this.callJohny = function(){
		alert(needToFillStock());
	}
	function needToFillStock(){
		return 'We are out of goods, I\'ll call Johny about new Laptops';
	}
}

function Computer(){
	//Установка this путём наследования контекста из вызова функции Good
	Good.call(this);
	this.callJohny = function(){
		alert(needToFillStock());
	}
	function needToFillStock(){
		return 'We are out of goods, I\'ll call Johny about new Computers';
	}	
}

function Phone(){
	//Установка this путём наследования контекста из вызова функции Good
	Good.call(this);

	this.callJohny = function(){
		alert(needToFillStock());
	}
	function needToFillStock(){
		return 'We are out of goods, I\'ll call Johny about new Phones';
	}
}


Laptop.prototype.toString = function(){
	return this.model;
}
Computer.prototype.toString = function(){
	return this.model;
}
Phone.prototype.toString = function(){
	return this.model;
}



/*
//Getter через defineProperties, не ясно как это работает
Object.defineProperties(alienWare, "calculateSoldProducts", {
	get: function(){
		var quantity = +prompt( 'How many of these?');
		var price = quantity * this.price;
		this.quantity -= quantity;
		alert('We\'ve sold ' + quantity + ' ' + this.model + '(s)\n' + 'We have ' + this.quantity + ' left\nTotal worth: ' + this.quantity * this.price );
		return true;
	}
});

Object.defineProperties(alienWare, 'isPink', {
	get: function(){
		var isPink = '';
		that.color == 'pink' ? isPink = true : isPink = false;
		return isPink;
	}
});
*/











