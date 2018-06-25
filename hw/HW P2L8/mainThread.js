/*Создайте Класс GOOD свойства isAvailable, shop метод chekAvailability*/


/*Создайте дочерний классы laptop, phone, computer
у них создать 3 публичных свойства, 2 публичных метода, 
по 2 приватных метода*/


/*1. Реализовать наследование через установку
 экхемпляра родителя как протипипа потомка*/
/*2. Реализовать наследование используя указание контекста
 выполнения для конструктора родителя*/
/*3. Использовать Оbject.create для 
указания прототипа для дочерних классов


Сами дочерние классы наполнить ТОЛЬКО используя Object.defineProperties
приватные методы описать отдельно от объекта. 
Используя методы привязки контекста привязать их к конкретным объектам*/

/*Создайти по 3 экз объекта дочерних классов

Выведите в документ в 
<div id="shop">

	//Этот фрагмент повторяется для каждой группы товаров
	//(т.е.) для каждого набора ЭО дочерних классов
	<h2>Good type</h2>
	<div class="goodsWrapper">
		<div class="good">
			<div class="icon">
				<img src='path/to/icon'>
			</div>
			<h3>Good name</h3>
			<h4>Good price</h3>
		</div>
	</div>

</div>	
*/

/* отрисовкой разметки занимается отдельная функция*/


//Обьект верхнего уровня


var alienWare = new Laptop();
var pavillion = new Laptop()
var macBook = new Laptop()
var pc = new Computer();
var server = new Computer();
var nas = new Computer();
var nokia = new Phone();
var iPhone = new Phone();
var meizu = new Phone();




//Рагульное обьявление трёх ЭО Laptop
Object.defineProperties(alienWare, {
	model: {
		value: "alienWare"
	},
	price: {
		value: 500
	},
	color: {
		value: "blue"
	},
	quantity: {
		value: 5
	},
	type: {
		value: 'Laptop'
	}
});

Object.defineProperties(pavillion, {
	model: {
		value: "pavillion"
	},
	price: {
		value: 300
	},
	color: {
		value: "gray"
	},
	quantity: {
		value: 5
	},
	type: {
		value: 'Laptop'
	}
});

Object.defineProperties(macBook, {
	model: {
		value: "macBook"
	},
	price: {
		value: 700
	},
	color: {
		value: "silver"
	},
	quantity: {
		value: 5
	},
	type: {
		value: 'Laptop'
	}
});

Object.defineProperties(pc, {
	model: {
		value: "pc"
	},
	price: {
		value: 1000
	},
	color: {
		value: "black"
	},
	quantity: {
		value: 6
	},
	type: {
		value: 'Computer'
	}
});

Object.defineProperties(server, {
	model: {
		value: "server"
	},
	price: {
		value: 250
	},
	color: {
		value: "orange"
	},
	quantity: {
		value: 6
	},
	type: {
		value: 'Computer'
	}
});

Object.defineProperties(nas, {
	model: {
		value: "nas"
	},
	price: {
		value: 300
	},
	color: {
		value: "pink"
	},
	quantity: {
		value: 6
	},
	type: {
		value: 'Computer'
	}
});

Object.defineProperties(nokia, {
	model: {
		value: "nokia"
	},
	price: {
		value: 300
	},
	color: {
		value: "gray"
	},
	quantity: {
		value: 7
	},
	type: {
		value: 'Phone'
	}
});

Object.defineProperties(iPhone, {
	model: {
		value: "iPhone"
	},
	price: {
		value: 600
	},
	color: {
		value: "pink"
	},
	quantity: {
		value: 7
	},
	type: {
		value: 'Phone'
	}
});

Object.defineProperties(meizu, {
	model: {
		value: "meizu"
	},
	price: {
		value: 380
	},
	color: {
		value: "green"
	},
	quantity: {
		value: 7
	},
	type: {
		value: 'Phone'
	}
});


var products = [alienWare, pavillion, macBook, pc, server, nas, nokia, iPhone, meizu];

renderShop(products);



//Object create Наследование
/*
f.Parent(){}
f.Child(){}


Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
*/
























