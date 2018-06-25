//1.Создайте функцию конструктор для компьютеров(Computer) 
/*Св-ва созданных экз. объектов - icon(картинка комп), type(laptop, PC...), model(e4650...), 
price(5000),quantity(3...),isAvailable(true/false),check(function)
*/
//метод  check проверяет значение quantity и если оно 0 - то isAvailable - false;
//Создаём используя эту функцию 3 экз объекта Computer


//2.создаём функцию(отдельно от конструктора конечно) register(экз.объекта как параметр), 
//которая новый екземпляр объекта будет записывать в массив Goods 
/*
на выходе - Goods = [
					{icon: '', type: '', model: '', price: 12312, quantity: 3, isAvailable: true, check: function(){}},
					{icon: '', type: '', model: '', price: 4312, quantity: 0, isAvailable: false, check: function(){}},
					]*/

//3. Создаём функцию chekAvailability, которая проходится по Goods и вызывает check на каждом check
// вызываем ее перед запуском render

/*4.Создаём функцию render для вывода в док массива goods - вывод происходив в таблицу(шапка таблицы - имена свойств)
в ячейках только значения свойств, метод не выводим, 
свойство isAvailable - выводим зеленым "В наличии" если isAvailable - true
					   выводим зеленым "Нет в наличии" если isAvailable - false*/ 



function Product(type, model, price, currency, quantity, icon, isAvailable = true){
	this.icon = '<img src="img/' + model + '.png" style="width: 100px; height: auto">';
	this.type = type;
	this.model = model;
	this.price = price;
	this.currency = currency
	this.quantity = quantity;
	this.isAvailable = isAvailable;
	this.check = function(){
		(!this.quantity) ? this.isAvailable = false : this.isAvailable = true;
	};
};

function insertProductDB(product){
	productDB.push(product);
};

function checkAvailability(){
	productDB.forEach(function(q,w,e){
		q.check();
	});
};


function renderTableBlock(){
	checkAvailability();
	document.write('<table border="1" cellspacing="0" style="width: 20%; height: 100px;">');
	document.write('<tbody>');
	productDB.forEach(function(q,w,e){
		for(var objectKey in q){
			if(objectKey == 'check' || objectKey == 'currency'){
				continue;
			}
			if(q.isAvailable && objectKey == 'isAvailable'){
				document.write('<tr><td>' + objectKey + '<td style="color: green">"В наличии"</td></td></tr>');
				continue;
			}
			if(!q.isAvailable && objectKey == 'isAvailable'){
				document.write('<tr><td>' + objectKey + '<td style="color: red">"Нет в наличии"</td></td></tr>');
				continue;
			}
			if(objectKey == 'icon'){
				document.write('<tr><td colspan="2" style="text-align: center">' + q[objectKey] +  '</td></tr>');
			}else{
				document.write('<tr><td>' + objectKey + '<td>' + q[objectKey] +  '</td></td></tr>');
			}

		}
	});
	document.write('</tbody>');
	document.write('</table>');
}


function renderTableInline(){
	checkAvailability();
	document.write('<table border="10" cellspacing="0" style="width: 100%; height: 100px;">');
	document.write('<tbody>');
	document.write('<tr border="2">');


	for(var objectKey in desktop){
		if(objectKey == 'check' || objectKey == 'currency'){
			continue;
		}
		document.write('<td style="width: 12%; height: 50px; text-align: center">' + objectKey + '</td>')
	}
	document.write('</tr>');


	productDB.forEach(function(q,w,e){
		document.write('<tr>');
		for(var objectKey in q){
			if(objectKey == 'check' || objectKey == 'currency'){
				continue;
			}
			if(objectKey == 'price'){
				document.write('<td style="text-align: center">' + q[objectKey] +' ' + q.currency +  '</td>');
				continue;
			}
			if(q.isAvailable && objectKey == 'isAvailable'){
				document.write('<td style="color: green; text-align: center">"В наличии"</td>');
				continue;
			}
			if(!q.isAvailable && objectKey == 'isAvailable'){
				document.write('<td style="color: red; text-align: center">"Нет в наличии"</td>');
				continue;
			}
			if(objectKey == 'icon'){
				document.write('<td style="text-align: center">' + q[objectKey] +  '</td>');
			}else{
				document.write('<td style="text-align: center">' + q[objectKey] +  '</td>');
			}
		}
		document.write('</tr>');
	});
	document.write('</tbody>');
	document.write('</table>');
}







var productDB = [];

var desktop = new Product('Desktop', 'model S', 1300, '$', 21, '');
var laptop = new Product('Laptop', 'model E', 650, '$', 0, '');
var shityPC = new Product('Server', 'model X', 243, '€', 1, '');
var otherPC = new Product('other', 'model Y', 2423, '€', 14, '');




insertProductDB(desktop);
insertProductDB(laptop);
insertProductDB(shityPC);
insertProductDB(otherPC);




console.log(productDB);
renderTableInline();
document.write('<p></p>')
renderTableBlock();