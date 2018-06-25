//ЭО = экземпляр объекта

//Опишите функцию конструктор для создания товаров(GOOD) - свойства - (icon,name, price, quantity)
//Опишите методы на прототипе buy, sell, toString, valueOf, getSum
//1. Buy - увеличивает quantity на 1
//2. Sell - уменьшает quantity на 1
//3.toString - выводит контретный товар в таблицу в одной строке, в разных ячейках - имя свойства + значение
//4. valueOf - возвращает цену товара.
//5. getSum - вызывается на одном ЭО, как параметр получает другой. Возвращает сумму этих ЭО.
//Создайте 4-5 ЭО.
//Создайте функцию которая будет иллюстрировать действие getSum. (Проявите фантазию, вывод может происходить через другой объект, например Cart(Корзина))
//Создайте ф-цию renderShop - которая выводит все товары, каждый товар в див
/*<div class='item'>
	<div class='itemIcon'>icon</div>
	<h3>name</h3>
	<h4>price</h4>
</div>*/
//



function Good(icon, name, price, quantity, currency){
	this.icon = icon;
	this.name = name;
	this.price = price;
	this.quantity = quantity;	
	this.currency = currency;	
}

function renderItemTable(item){
	var htmlToRender = '';	
	for(var objectKey in item){
		if(objectKey != 'icon' &&
		   objectKey != 'name' &&
		   objectKey != 'price' &&
		   objectKey != 'quantity'){
			continue;
		}


		if(objectKey == 'icon'){
			htmlToRender +='<tr><td colspan="2" style="text-align: center; height: 250px"><img style="width: 100%; height: 100%"'+ item.icon +'"></td></tr>';
		}else if(objectKey == 'price'){
			htmlToRender +='<tr><td>' + objectKey + '<td>' + item[objectKey] + ' ' + item.currency + '</td></td></tr>';
		}else{
			htmlToRender +='<tr><td>' + objectKey + '<td>' + item[objectKey] +  '</td></td></tr>';
		}

	}
	return htmlToRender;
}

function renderTableLayout(stockArray){
	var render = '';
	stockArray.forEach(function(q,w,e){
		render += '<div class="tableWrap"><table border = 3 style="width: 100%">';
		render += renderItemTable(q);
		render += '</table></div>';
	});
	return render;
}




//Функции вополняют то же самое, только вторая рендерит весь сток из массива, а первая по вызову 1 предмет
function renderItem(itemToRender){
	document.write(
		'<div class="item" >' +
		'<div class="itemIcon"><img src="'+ itemToRender.icon +'"></div>' +
		'<h3>' + itemToRender.name + '</h3>' +
		'<h4>' + itemToRender.price + ' ' + itemToRender.currency + '</h4>' + 
		'<input type="button" value="Add to cart" onclick="addToCart('+itemToRender+')"></div>'
	);
}



function renderShop(stock){
	stock.forEach( function(q,w,e){
		document.write(
		'<div class="item">' +
		'<div class="itemIcon"><img src="'+ q.icon +'"></div>' +
		'<h3>' + q.name + '</h3>' +
		'<h4>' + q.price + ' ' + q.currency + '</h4>' +
		//Вставка сюда метода toString ведёт к index.html:20 Uncaught SyntaxError: Unexpected end of input
		'<div class="button" onclick="addToCartSecond(' + "'" +q.toString() + "'" + ')">Add to cart</div></div>'
		);
	});	
}

// addToCartSecond(' + q.toString() + ')

function addToCartSecond(item){
	console.log( item.split(',') );

}



//Способ подсчёта стоимости с промежуточным итогом для всех товаров, выведеных по одному
var addToCart = (function(){
	var result = 0;
	var counter = 0;
	return function(num){
		counter++;
		result += num;
		alert('Cart has: ' + counter + ' item(s) in it\n' + 'Total is: ' + result + '');
		return result;
	};
}());


//Работа с прототипом конструктора
Good.prototype.getSum = function(another){
	return this.price + another.price;
};

Good.prototype.buy = function(){
	this.quantity++;
};

Good.prototype.sell = function(){
	this.quantity--;
};

//Пидарские методы для преобразования к примитивам
Good.prototype.valueOf = function(){
	return this.price;
};

Good.prototype.toString = function(){
	var arr = [];
	for(var objectKey in this){
		if(objectKey != 'icon' &&
		   objectKey != 'name' &&
		   objectKey != 'price' &&
		   objectKey != 'quantity'){
			continue;
		}
		arr.push(this[objectKey]);
	}
	return arr;
};




//Наполнение "магазина" мусором
var laptop = new Good('img/laptop.jpeg', 'Laptop', 1200, 23, '$');
var magazine = new Good('img/magazine.jpeg', 'Magazine', 4.80, 127, '$');
var heaphones = new Good('img/headphones.jpeg', 'Heaphones', 9.7, 67, '$');
var phone = new Good('img/phone.jpeg', 'Phone', 285, 34, '$');
var shoes = new Good('img/shoes.jpeg', 'Shoes', 43, 88, '$');

var stock = [laptop, magazine, heaphones, phone, shoes];






//Отрисовка в документ необходимых элементов
// console.log( laptop.toString() );
//SEO заголовки
document.write( '<h1>Best prices for popular products!</h1>' );
document.write( '<h2>Take a look at our fancy offers, only at naKolenkah&naDivane.com:</h2>' );


//Render product types
document.write( renderTableLayout(stock) );

//Render магазина 
document.write('<h2>Shop here fast&easy with secure payment system "Kontora Garantiruet.pro"</h2>');
document.write('<h3>Add to cart any products to calculate checkout price"</h3>');

//Выкладка по одному товару
renderItem(laptop);
renderItem(magazine);
renderItem(heaphones);
renderItem(phone);
renderItem(shoes);

//Выкладка товаров из "базы"
renderShop(stock);




